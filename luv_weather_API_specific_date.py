import requests

username = "hackathon_nasa_space_apps_ramrup_luv"
password = "Zv1G6OT2Y1YWDtQ2v6K4"
 
url = (
    "https://api.meteomatics.com/"
    "2026-10-23T14:00:00Z/"     #Specify the date + time
    "t_2m:C,precip_1h:mm,wind_speed_10m:ms,"
    "absolute_humidity_2m:gm3,heat_index:C,"
    "first_high_tide:sql,first_low_tide:sql,"
    "cloud_base_agl:m,global_rad:W/"
    "-20.492,57.358/json"       #Specify the location
)

response = requests.get(url, auth=(username, password), timeout=30)
response.raise_for_status()

for item in response.json()["data"]:
    value = item["coordinates"][0]["dates"][0]["value"]
    print(f"{item['parameter']}: {value}")