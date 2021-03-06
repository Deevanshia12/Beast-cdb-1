import uuid
import datetime

import src.models.dot.constants as AdminConstants
import src.models.dot.errors as Errors

from src.common.Utility.Utility import CommonUtility as DotUtility

from src.common.database import Database
from src.common.Utility.utils import Utils
from src.models.sim.sim import Sim


class Admin:
    def __init__(self, username, password, name, dob, privileges, title, _id=None):
        self.username = username.strip()
        self.password = password
        self._id = uuid.uuid4().hex if _id is None else _id
        self.name = DotUtility.formating_name(name)
        self.dob = datetime.datetime.strptime(dob,"%Y-%m-%d") if isinstance(dob, str) else dob
        self.privileges = privileges
        self.title = title

    def json(self):
        return {
            'username':self.username,
            'password':self.password,
            '_id':self._id,
            'name':self.name,
            'dob':self.dob.strftime("%Y-%m-%d"),
            'privileges':self.privileges,
            'title':self.title
        }
    @classmethod
    def get_by_id(cls, admin_id):
        data = Database.find_one(AdminConstants.COLLECTION, {'_id':admin_id})
        return cls(**data) if data is not None else False

    def save_to_db(self):
        return Database.update(AdminConstants.COLLECTION, {'_id':self._id}, self.json())

    @classmethod
    def get_by_username(cls,username):
        data = Database.find_one(AdminConstants.COLLECTION,{'username': username})
        return cls(**data) if data is not None else False

    @classmethod
    def is_login_valid(cls, username, password):
        """
        This methods verifies that an username/password combo as
        sent by the site form is valid or not. Checks that username
        exists, and the password associated to that username is correct
        :param username:The user's username
        :param password: A sha-512 hashed password
        :return:true if Login successful otherwise false
        """
        admin = cls.get_by_username(username)
        if not admin:
            # Tells that user doesn't exist
            raise Errors.AdminNotExistError('There is no account with the username: {}'.format(username))
        if not Utils.check_hashed_password(password, admin.password):
            raise Errors.PasswordIncorrectError('Incorrect Password ' +password)

        return admin

    @classmethod
    def list_all_admin(cls):
        cluster_data = Database.find(AdminConstants.COLLECTION, {})
        return [cls(**data) for data in cluster_data if data is not None] if cluster_data is not None else None

    @staticmethod
    def list_all_sims():
        sims = Sim.get_all_sim()
        return sims