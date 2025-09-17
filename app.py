from flask import Flask, render_template, request, jsonify
import requests
import os
from dotenv import load_dotenv
from datetime import datetime

app = Flask(__name__)


load_dotenv()
API_KEY = os.getenv("OWM_API_KEY")

@app.template_filter('datetime')
def format_datetime(value):
    return datetime.fromtimestamp(value).strftime('%H:%M:%S')



def get_weather(city):
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
    response = requests.get(url)
    return response.json()


@app.route("/", methods=["GET", "POST"])
def home():
    city = "Delhi"  # default city
    if request.method == "POST":
        city = request.form.get("city")  # update city from form input
    weather = get_weather(city)
    return render_template("index.html", weather=weather, city=city)



if __name__ == "__main__":
    app.run(debug=True)

