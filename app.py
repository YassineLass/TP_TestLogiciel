from flask import Flask,render_template,request,redirect, url_for,make_response,jsonify
from flask_cors import CORS
import sqlite3
import random
con = sqlite3.connect('game.db')
cur = con.cursor()
#cur.execute('''CREATE TABLE user
 #              (username text, password text)''')
#cur.execute("INSERT INTO user VALUES ('yassine','yassine')")
con.commit()
global secret
secret = random.randint(1,50)
def comparenumber(a,s):
		
		if (a==s):
			return 1
		elif(a<s):
			return -1
		else:
			return 0
def get_secret():
		global secret
		return secret
def new_secret():
	global secret
	secret = random.randint(1,50)
	return 1	
def get_randomNumber(i):
	if(i<1):
		return -1
	return random.randint(1,i)					
def create_app(name):
	app = Flask(__name__)
	CORS(app)
	global user

	

	
	
	user = ""
	@app.route('/user',methods=["GET"])
	def getname():
		global user
		print(user)
		return make_response(user, 200)
	@app.route('/')
	def home():
		return render_template('index.html')
	
	@app.route('/game')
	def game():
		global user
		print("game started",request.args.get('username'))
		user = request.args.get('username')
		return render_template("index.html")
	
	@app.route('/new',methods=["GET"])
	def new():
		new_secret()
		return make_response("Done", 200)
	@app.route("/check",methods=["POST"])
	def check_number():
		data = request.get_json()
		number = int(data["number"])
		r = comparenumber(number,get_secret())
		if (r == 1):
			return {
			"result":"YES"
			}
		elif(r==-1):
			return {
			"result":"INF"
			}
		else:
			return {
			"result":"SUP"
			}


	@app.route('/login',methods=["POST"])
	def login():
		print(request.form)
		data = request.get_json()
		username,password =data["username"],data["password"]
		con = sqlite3.connect('game.db')
		cur = con.cursor()
		user = cur.execute("SELECT * from user WHERE username = ? AND password = ?",(username,password,))
		user = cur.fetchone()
		print( user)

		return    make_response("registered", 200)

	@app.route('/test',methods=['GET'])
	def test():
		print("Test")
		return 'test'

	return app	

if __name__ == "__main__":
	app = create_app(__name__)
	app.run(debug=True)
