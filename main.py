from flask import Flask, render_template, jsonify, request

app = Flask(__name__)
wood = 100000
tool = 'wood axe'
need = 0

@app.route('/')
def index():
    global wood
    global tool
    return render_template("index.html",woods = wood,tool = tool)

@app.route('/', methods=['POST'])
def modify_wood():
    global wood
    global need
    if request.method == 'POST':
        action = request.form.get('action')
        if action == 'add':
            wood += 1
        elif action == 'subtract':
            wood -= need
            need += 10
            if wood < 0:
                wood = 0
            if need >= 100:
                return jsonify({'wood': wood, 'need': 'Max'})
    return jsonify({'wood': wood, 'need': need})


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')