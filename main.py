from flask import Flask, render_template, jsonify, request

app = Flask(__name__)
wood = 0
tool = 'wood axe'
need = 0

@app.route('/')
def index():
    global wood
    global tool
    return render_template("index.html",woods = wood,tool = tool)

@app.route('/',methods=['POST'])
def wood_add():
    global wood
    wood = wood + 1
    return jsonify({'wood': wood})

@app.route('/make_house', methods=['POST'])
def decrement_counter():
    global wood
    global need
    need += 10
    wood -= need  # 나무 10개씩 빼기
    if wood < 0:
        wood = 0
    return jsonify({'wood': wood},{'need':need})
@app.route('/save', methods=['POST'])
def save_data():
    global wood
    data = request.form.get('data')
    # 데이터 저장
    with open('data.txt', 'w') as file:
        file.write(data)
    return jsonify({'message': '저장 완료'})

@app.route('/load', methods=['GET'])
def load_data():
    # 데이터 불러오기
    try:
        with open('data.txt', 'r') as file:
            data = file.read()
        return jsonify({'data': data})
    except FileNotFoundError:
        return jsonify({'data': ''})


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')