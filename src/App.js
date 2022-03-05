import React from "react";
import "./style.css";

export default function App() {
  function getNodes(object) {
    return Object
        .entries(object)
        .map(([key, value]) => value && typeof value === 'object'
            ? { label: key, key, children: getNodes(value) }
            : { label: key, key, value }
        );
}

const data = {"message":"success","statusCode":200,"data":{"request":{"type":"City","query":"New York, United States of America","language":"en","unit":"m"},"location":{"name":"New York","country":"United States of America","region":"New York","lat":"40.714","lon":"-74.006","timezone_id":"America/New_York","localtime":"2022-03-04 04:13","localtime_epoch":1646367180,"utc_offset":"-5.0"},"current":{"observation_time":"09:13 AM","temperature":-5,"weather_code":116,"weather_icons":["https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"],"weather_descriptions":["Partly cloudy"],"wind_speed":19,"wind_degree":330,"wind_dir":"NNW","pressure":1032,"precip":0,"humidity":41,"cloudcover":25,"feelslike":-11,"uv_index":1,"visibility":16,"is_day":"no"}}},
    result = getNodes(data);

console.log(result);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
