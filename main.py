from flask import Flask, render_template

app = Flask(__name__)
wood = 0

@app.route('/')
def index():
    global wood
    return render_template("index.html",woods = wood)

@app.route('/',methods=['POST'])
def wood_add():
    global wood
    wood = wood + 1
    return render_template("index.html",woods = wood)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')