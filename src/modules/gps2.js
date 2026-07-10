import { renderWeatherLocationLock } from "./renderWeatherData";
import { stopDataLoading, setDataLoading } from "./weatherLoadingEffect";

export function init(weekWeatherData) {
  //取得 經緯度
  if (navigator.geolocation) {
    setDataLoading("正在存取位置");
    navigator.geolocation.getCurrentPosition(showPosition, error); //有拿到位置就呼叫 showPosition 函式
  } else {
    console.error("您的瀏覽器不支援 顯示地理位置 API ，請使用其它瀏覽器開啟 這個網址");
    return;
  }
  function showPosition(position) {
    let my_lat = position.coords.latitude;
    let show_lat = my_lat.toString().slice(0, 10);
    let my_lon = position.coords.longitude;
    let show_lon = my_lon.toString().slice(0, 10);

    let min_result = 9999;
    let locationName = "臺北市";

    let geolocationIp = document.querySelector("#geolocationIp");
    geolocationIp.innerHTML = ` <div>
                                您的地理位置
                                </div>
                                <div>
                                <span class="phoneIp">
                                緯度:
                                </span>
                                ${show_lat}
                               </div>
                                <div>
                                  <span class="phoneIp">
                                  經度:
                                  </span>
                                  ${show_lon}
                                </div>
                               `;

    if(weekWeatherData) {
      setDataLoading("計算中");
      weekWeatherData.forEach((element) => {
        const lat = element["latitude"];
        const lon = element["longitude"];

        const result =
          ((my_lat - lat) * (my_lat - lat) +
            (my_lon - lon) * (my_lon - lon)) **
          0.5;

        if (min_result > result) {
          min_result = result;
          locationName = element["locationName"];
        }
      });
      renderWeatherLocationLock(locationName);
    }
  }

  function error() {
    setDataLoading("無位置資訊");
  }
}
