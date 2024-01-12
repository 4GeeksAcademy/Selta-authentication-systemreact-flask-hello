"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, redirect, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException, get_hash, hash_password, verify_password
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, unset_jwt_cookies

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route("/signup", methods=["POST"])
def signup():
    
    email = request.json.get("email")
    password = request.json.get("password")
    
    hashed_password = hash_password(password)

    new_user = User (email=email, password=hashed_password)
    db.session.add (new_user)
    db.session.commit()
    
    return jsonify({"success":"User created successfully"}), 200


@api.route("/login", methods=["POST"])
def signup():
    
    email = request.json.get("email", None)
    password = request.json.get("password", None) 
    user = User.query.filter_by (email=email).first()  

    if not user or not verify_password (user.password, password):
        return jsonify({"error": "Invalid email or password"}), 401
    
    access_token = create_access_token(identity=email)
    return jsonify (access_token=access_token)

@api.route("/any-route", methods=["GET"])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify (logged_in_as= current_user), 200

@api.route("/get-hash", methods=["POST"])
def handle_get_hash():
    to_hash = request.json.get ("string")
    return get_hash (to_hash)

#missing private

@api.route("/logout", methods=["POST"])
def logout ():
    current_user = get_jwt_identity()

    @jwt_required()
    def exec_logout():
        response = jsonify ({"message": "Logout successfull"})
        unset_jwt_cookies(response)
        return response, 200
    return exec_logout()
