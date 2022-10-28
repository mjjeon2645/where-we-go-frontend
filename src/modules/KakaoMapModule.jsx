const { kakao } = window;

export default function KakaoMap() {
  const container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(37.565984, 126.975373),
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);
}
