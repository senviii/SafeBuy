@app.route('/api/check_url', methods=['POST'])
def check_url():
    url = request.json['url']
    features = extract_features(url)  # your feature engineering logic
    prediction = model.predict([features])[0]
    return jsonify({'prediction': prediction})
