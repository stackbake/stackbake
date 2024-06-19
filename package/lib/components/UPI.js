"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _material = require("@mui/material");
var _upiqr = _interopRequireDefault(require("upiqr"));
var _reactDeviceDetect = require("react-device-detect");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var UPI = function UPI(_ref) {
  var upiOptions = _ref.upiOptions;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    upi = _useState2[0],
    setUpi = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  (0, _react.useEffect)(function () {
    (0, _upiqr["default"])({
      payeeVPA: upiOptions.payeeVPA,
      payeeName: upiOptions.payeeName,
      amount: upiOptions.amount,
      transactionNote: upiOptions.note,
      transactionRefUrl: upiOptions.transactionRefUrl,
      transactionRef: upiOptions.transactionRef,
      payeeMerchantCode: upiOptions.payeeMerchantCode,
      minimumAmount: upiOptions.minimumAmount,
      currency: upiOptions.currency,
      transactionId: upiOptions.transactionId
    }).then(function (upi) {
      console.log(upi.qr);
      console.log(upi.intent);
      setUpi(upi);
    })["catch"](function (err) {
      console.log(err);
      setError(err);
    });
  }, [upiOptions]);
  if (error) {
    return /*#__PURE__*/React.createElement(_material.Box, {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }, /*#__PURE__*/React.createElement(_material.Typography, {
      variant: "h6",
      color: "error"
    }, "Error generating UPI QR Code: ", error.message));
  }
  return /*#__PURE__*/React.createElement(_material.Box, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    p: 2,
    border: 1,
    borderRadius: 2,
    boxShadow: 3,
    bgcolor: "background.paper",
    m: 2,
    boxSizing: "border-box"
  }, !upi ? /*#__PURE__*/React.createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/React.createElement(_material.Grid, {
    item: true,
    xs: 12,
    display: "flex",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'black'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "120",
    height: "60",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M95.678 42.9L110 29.835l-6.784-13.516z",
    fill: "#097939"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M90.854 42.9l14.322-13.065-6.784-13.516z",
    fill: "#ed752e"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.41 16.47l-6.03 21.475 21.407.15 5.88-21.625h5.427l-7.05 25.14c-.27.96-1.298 1.74-2.295 1.74H12.31c-1.664 0-2.65-1.3-2.2-2.9l6.724-23.98zm66.182-.15h5.427l-7.538 27.03h-5.58zM49.698 27.582l27.136-.15 1.81-5.707H51.054l1.658-5.256 29.4-.27c1.83-.017 2.92 1.4 2.438 3.167L81.78 29.49c-.483 1.766-2.36 3.197-4.19 3.197H53.316L50.454 43.8h-5.28z",
    fill: "#747474"
  })))), /*#__PURE__*/React.createElement(_material.Grid, {
    item: true,
    xs: 12,
    display: "flex",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(_material.CircularProgress, null))) : /*#__PURE__*/React.createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/React.createElement(_material.Grid, {
    item: true,
    xs: 12,
    display: "flex",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'black'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "120",
    height: "60",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M95.678 42.9L110 29.835l-6.784-13.516z",
    fill: "#097939"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M90.854 42.9l14.322-13.065-6.784-13.516z",
    fill: "#ed752e"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.41 16.47l-6.03 21.475 21.407.15 5.88-21.625h5.427l-7.05 25.14c-.27.96-1.298 1.74-2.295 1.74H12.31c-1.664 0-2.65-1.3-2.2-2.9l6.724-23.98zm66.182-.15h5.427l-7.538 27.03h-5.58zM49.698 27.582l27.136-.15 1.81-5.707H51.054l1.658-5.256 29.4-.27c1.83-.017 2.92 1.4 2.438 3.167L81.78 29.49c-.483 1.766-2.36 3.197-4.19 3.197H53.316L50.454 43.8h-5.28z",
    fill: "#747474"
  })))), /*#__PURE__*/React.createElement(_material.Grid, {
    item: true,
    xs: 12,
    sm: 4,
    display: "flex",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement("img", {
    src: upi.qr,
    alt: "UPI QR Code",
    style: {
      maxWidth: '100%',
      height: 'auto',
      marginBottom: '10px'
    }
  })), /*#__PURE__*/React.createElement(_material.Grid, {
    item: true,
    xs: 12,
    sm: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      color: 'black'
    }
  }, upiOptions.amount), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'black'
    }
  }, upiOptions.note), _reactDeviceDetect.isMobile && /*#__PURE__*/React.createElement("a", {
    href: upi.intent,
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(_material.Button, {
    fullWidth: true,
    style: {
      textDecoration: 'none',
      marginBottom: '10px',
      marginTop: '10px'
    },
    variant: "contained"
  }, "Pay ", upiOptions.amount))), /*#__PURE__*/React.createElement(_material.Grid, {
    item: true,
    xs: 12,
    display: "flex",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'black'
    }
  }, "Scan QR using any UPI app or Click on \"Pay\" to open UPI App"))));
};
var _default = exports["default"] = UPI;