//router.js
const ROUTE_CHANGE_EVENT = "ROUTE_CHANGE";

export const init = (onRouteChange) => {
  window.addEventListener(ROUTE_CHANGE_EVENT, () => {
    // addEventListener(type, listener)
    onRouteChange();
  });
};

// URL 업데이트하고 커스텀 이벤트 발생시키는 함수
export const routeChange = (url, params) => {
  history.pushState(null, null, url);
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params));
  // dispatchEvent: 이벤트 객체를 생성한 다음 el.dispatchEvent(event)를 호출해 요소에 있는 이벤트를 '실행'시킴
};
