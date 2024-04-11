import React, { useState } from "react";
import tick from "./bluecheckmark.png";
import ellipse1 from "./ellipse1.png";
import ellipse2 from "./ellipse2.png";
import businessman from "./businessman.png";
import person from "./person.png";
import NavBar from "../helper/navbar";
import useScreenSize from "../../utils/useScreenSize";
import styled from "styled-components";

const NotificationBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  padding: 20px;
  z-index: 9999;
  height: 200px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
`;

// Styled heading
const Heading = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  padding-bottom: 70px;
`;

// Styled button
const Button = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  font-size: 16px;
  border: none;
  background-color: green;
  color: white;
  cursor: pointer;
`;

const approval_page = () => {
  const screenSize = useScreenSize();
  return (
    <>
      <div>
        <NavBar></NavBar>
      </div>
      {screenSize.width > 900 && (
        <div className="bg-indigo-100 h-dvh">
          <div className="w-5/6  mx-auto">
            {screenSize.width > 1000 && (
              <div className="static">
                <img
                  src={ellipse1}
                  style={{ height: "500px" }}
                  className="absolute top-15 right-0"
                />
                <img
                  src={ellipse2}
                  style={{ height: "350px" }}
                  className="absolute bottom-0 right-0"
                />
                <img
                  src={businessman}
                  style={{ height: "350px" }}
                  className="absolute top-28 right-12"
                />
              </div>
            )}
            <div className="px-24 pt-16">
              <div className="text-6xl text-gray-500 font-bold pb-6">
                Approval Page
              </div>
              <div className="text-4xl text-blue-900 font-semibold">Alumni</div>

              <div className="h-0.5 w-28 bg-black mb-10"></div>
            </div>

            <AlumniCards
              regNo="2018B4A70633G"
              UserName="johndoe"
              DisplayName="John Doe"
            />

            <div className="flex justify-center pt-14">
              <img src={tick} alt="tickmark" className="h-10 w-24" />
              <img src={tick} alt="tickmark" className="h-10 w-24" />
              <img src={tick} alt="tickmark" className="h-10 w-24" />
            </div>
          </div>
        </div>
      )}

      {screenSize.width <= 900 && (
        <div className={`bg-indigo-100 h-[${screenSize.height}]px`}>
          <div className="w-5/6  mx-auto">
            <div className="font-center text-5xl text-gray-500 font-bold p-6">
              <center>Approval Page</center>
            </div>
            <div className="flex justify-between">
              <div className="my-auto">
                <div className="text-3xl text-blue-900 font-semibold">
                  Alumni
                </div>
                <div className="h-0.5 w-28 bg-black "></div>
              </div>
            </div>
            <div className="p-3">
              <AlumniCards
                regNo="2018B4A70633G"
                UserName="johndoe"
                DisplayName="John Doe"
              />
            </div>
            <div>
              <div className="flex justify-center pt-14">
                <img src={tick} alt="tickmark" className="h-10 w-24" />
                <img src={tick} alt="tickmark" className="h-10 w-24" />
                <img src={tick} alt="tickmark" className="h-10 w-24" />
              </div>
            </div>
            <div className="p-3 pt-8">
              <div className="flex justify-end">
                <svg
                  width="300"
                  height="254"
                  viewBox="0 0 300 254"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1362_14330)">
                    <path
                      d="M120.045 52.5818H118.95V19.2763C118.95 16.7449 118.502 14.2383 117.63 11.8996C116.758 9.56089 115.479 7.43588 113.868 5.64591C112.257 3.85594 110.344 2.43606 108.239 1.46733C106.133 0.498602 103.877 2.1448e-06 101.598 0H38.0789C33.4768 -9.74597e-06 29.0631 2.03087 25.809 5.64587C22.5548 9.26087 20.7266 14.1639 20.7266 19.2763V201.993C20.7266 204.524 21.1754 207.031 22.0474 209.369C22.9195 211.708 24.1976 213.833 25.8089 215.623C27.4202 217.413 29.3331 218.833 31.4384 219.802C33.5437 220.77 35.8001 221.269 38.0788 221.269H101.598C106.2 221.269 110.614 219.238 113.868 215.623C117.122 212.008 118.95 207.105 118.95 201.993V76.2892H120.045V52.5818Z"
                      fill="#3F3D56"
                    />
                    <path
                      d="M102.299 5.01514H94.0079C94.3892 6.05361 94.5348 7.18031 94.4317 8.29599C94.3287 9.41167 93.9803 10.4821 93.4171 11.4129C92.854 12.3438 92.0934 13.1065 91.2024 13.6339C90.3114 14.1613 89.3174 14.4372 88.3078 14.4373H51.9184C50.9088 14.4372 49.9148 14.1613 49.0238 13.6339C48.1328 13.1065 47.3722 12.3438 46.809 11.413C46.2459 10.4821 45.8975 9.41168 45.7945 8.296C45.6914 7.18032 45.837 6.05361 46.2183 5.01514H38.4741C36.7724 5.01514 35.0873 5.38748 33.5151 6.11091C31.9429 6.83434 30.5144 7.8947 29.3111 9.23142C28.1078 10.5682 27.1533 12.1551 26.502 13.9016C25.8508 15.6481 25.5156 17.52 25.5156 19.4105V201.859C25.5156 203.749 25.8508 205.621 26.502 207.368C27.1533 209.114 28.1078 210.701 29.3111 212.038C30.5144 213.375 31.9429 214.435 33.5151 215.158C35.0873 215.882 36.7724 216.254 38.4741 216.254H102.299C104.001 216.254 105.686 215.882 107.258 215.158C108.83 214.435 110.259 213.375 111.462 212.038C112.666 210.701 113.62 209.114 114.271 207.368C114.923 205.621 115.258 203.749 115.258 201.859V19.4105C115.258 17.52 114.923 15.6481 114.271 13.9016C113.62 12.1551 112.666 10.5682 111.462 9.23142C110.259 7.8947 108.83 6.83434 107.258 6.11091C105.686 5.38748 104.001 5.01513 102.299 5.01514Z"
                      fill="white"
                    />
                    <path
                      d="M140.404 221.3H0.36755C0.27007 221.3 0.176582 221.257 0.107653 221.181C0.0387236 221.104 0 221 0 220.892C0 220.784 0.0387236 220.68 0.107653 220.603C0.176582 220.527 0.27007 220.484 0.36755 220.484H140.404C140.502 220.484 140.595 220.527 140.664 220.603C140.733 220.68 140.772 220.784 140.772 220.892C140.772 221 140.733 221.104 140.664 221.181C140.595 221.257 140.502 221.3 140.404 221.3Z"
                      fill="#CBCBCB"
                    />
                    <path
                      d="M70.3859 141.142C87.5278 141.142 101.424 125.705 101.424 106.663C101.424 87.6202 87.5278 72.1831 70.3859 72.1831C53.2439 72.1831 39.3477 87.6202 39.3477 106.663C39.3477 125.705 53.2439 141.142 70.3859 141.142Z"
                      fill="#6C63FF"
                    />
                    <path
                      d="M67.3104 119.816C66.6121 119.817 65.9324 119.566 65.3738 119.101L65.3391 119.072L58.0447 112.873C57.7069 112.585 57.4234 112.227 57.2104 111.817C56.9974 111.408 56.8591 110.956 56.8033 110.487C56.7476 110.018 56.7755 109.542 56.8855 109.085C56.9955 108.628 57.1854 108.2 57.4444 107.824C57.7034 107.449 58.0264 107.134 58.395 106.898C58.7635 106.661 59.1704 106.507 59.5925 106.445C60.0145 106.383 60.4434 106.415 60.8546 106.537C61.2658 106.659 61.6514 106.87 61.9892 107.158L66.7139 111.182L77.8787 95.0018C78.1376 94.6266 78.4605 94.3118 78.8289 94.0753C79.1973 93.8388 79.604 93.6852 80.0259 93.6233C80.4477 93.5614 80.8764 93.5924 81.2875 93.7145C81.6985 93.8367 82.0839 94.0476 82.4216 94.3352L82.4226 94.336L82.3533 94.4429L82.4244 94.336C83.1057 94.9176 83.5515 95.7758 83.6638 96.7221C83.7762 97.6684 83.546 98.6256 83.0238 99.3836L69.8916 118.407C69.5878 118.845 69.1971 119.2 68.75 119.444C68.3029 119.687 67.8112 119.813 67.3133 119.811L67.3104 119.816Z"
                      fill="white"
                    />
                    <path
                      d="M255.17 224.689C255.547 224.011 255.992 223.382 256.495 222.813C256.703 222.574 256.921 222.349 257.147 222.13C258.519 220.773 260.192 219.846 261.994 219.446C263.795 219.045 265.66 219.185 267.397 219.85C269.134 220.516 270.68 221.683 271.876 223.233C273.072 224.782 273.875 226.657 274.202 228.665C275.718 222.438 271.772 216.304 267.805 211.592C263.835 206.882 259.298 201.715 259.321 195.26C259.332 191.669 260.914 188.465 263.301 186.09C263.375 186.018 263.449 185.946 263.524 185.877C266.41 183.129 270.123 181.691 273.921 181.851C280.978 182.271 287.139 187.54 291.418 193.789C298.306 203.845 301.324 217.959 296.502 229.406C292.261 239.473 283.216 245.452 273.984 250.258C272.695 250.929 271.408 251.58 270.125 252.211C270.116 252.213 270.107 252.22 270.098 252.222C270.036 252.253 269.975 252.283 269.917 252.314C269.652 252.444 269.387 252.574 269.124 252.702L269.246 252.79L269.625 253.063C269.494 252.975 269.363 252.889 269.232 252.8C269.193 252.773 269.151 252.748 269.112 252.721C264.578 249.699 259.981 246.502 256.849 241.784C253.6 236.885 252.294 229.868 255.17 224.689Z"
                      fill="#F1F1F1"
                    />
                    <path
                      d="M285.421 213.313C286.425 215.85 287.091 218.536 287.397 221.287C287.638 223.739 287.547 226.218 287.128 228.641C286.228 233.62 284.264 238.286 281.403 242.247C279.244 245.254 276.751 247.945 273.985 250.258C272.696 250.929 271.409 251.58 270.125 252.211C270.117 252.213 270.108 252.22 270.099 252.223C270.037 252.253 269.976 252.283 269.918 252.314C269.653 252.444 269.388 252.574 269.125 252.702L269.247 252.79L269.626 253.063C269.495 252.975 269.364 252.889 269.233 252.8C269.194 252.774 269.152 252.748 269.113 252.722C270.111 248.844 270.258 244.758 269.541 240.805C268.824 236.852 267.265 233.147 264.994 230.001C262.711 226.895 259.799 224.432 256.496 222.813C256.704 222.574 256.922 222.349 257.148 222.13C258.42 222.779 259.638 223.551 260.788 224.439C264.9 227.596 267.988 232.14 269.594 237.398C271.028 242.169 271.207 247.294 270.11 252.174C270.338 252.009 270.566 251.839 270.789 251.67C275.012 248.506 278.905 244.706 281.837 240.046C284.366 236.107 285.985 231.538 286.55 226.741C287.112 221.501 285.932 216.348 283.826 211.673C281.5 206.671 278.57 202.045 275.116 197.925C271.647 193.691 267.725 189.945 263.437 186.769C263.34 186.697 263.272 186.586 263.247 186.46C263.222 186.333 263.242 186.201 263.302 186.09C263.348 185.989 263.428 185.913 263.525 185.877C263.574 185.863 263.625 185.862 263.675 185.873C263.724 185.884 263.771 185.907 263.811 185.941C264.341 186.334 264.866 186.729 265.384 187.137C269.702 190.534 273.624 194.514 277.059 198.985C280.379 203.294 283.4 208.082 285.421 213.313Z"
                      fill="white"
                    />
                    <path
                      d="M192.978 16.0098C196.619 16.0098 199.57 12.7314 199.57 8.68729C199.57 4.64316 196.619 1.36475 192.978 1.36475C189.338 1.36475 186.387 4.64316 186.387 8.68729C186.387 12.7314 189.338 16.0098 192.978 16.0098Z"
                      fill="#F1F1F1"
                    />
                    <path
                      d="M274.943 114.003C277.162 114.003 278.961 112.004 278.961 109.538C278.961 107.073 277.162 105.074 274.943 105.074C272.723 105.074 270.924 107.073 270.924 109.538C270.924 112.004 272.723 114.003 274.943 114.003Z"
                      fill="#F1F1F1"
                    />
                    <path
                      d="M157.327 126.252C159.547 126.252 161.346 124.253 161.346 121.787C161.346 119.322 159.547 117.323 157.327 117.323C155.108 117.323 153.309 119.322 153.309 121.787C153.309 124.253 155.108 126.252 157.327 126.252Z"
                      fill="#F1F1F1"
                    />
                    <path
                      d="M159.596 253.556H299.633C299.73 253.556 299.824 253.513 299.893 253.437C299.961 253.36 300 253.256 300 253.148C300 253.04 299.961 252.936 299.893 252.859C299.824 252.783 299.73 252.74 299.633 252.74H159.596C159.499 252.74 159.405 252.783 159.336 252.859C159.267 252.936 159.229 253.04 159.229 253.148C159.229 253.256 159.267 253.36 159.336 253.437C159.405 253.513 159.499 253.556 159.596 253.556Z"
                      fill="#CBCBCB"
                    />
                    <path
                      d="M284.178 39.4565C284.362 38.0063 284.06 36.5315 283.331 35.3116C282.601 34.0917 281.494 33.2115 280.219 32.8377C278.945 32.464 277.591 32.6227 276.414 33.2837C275.238 33.9447 274.321 35.0622 273.836 36.4244L262.473 50.8964L265.807 61.2415L277.235 44.3315C277.981 44.5969 278.77 44.6774 279.547 44.5674C280.324 44.4573 281.069 44.1594 281.731 43.6946C282.393 43.2298 282.955 42.6095 283.378 41.8772C283.801 41.145 284.074 40.3187 284.178 39.4565Z"
                      fill="#FFB7B7"
                    />
                    <path
                      d="M237.075 95.7671L274.797 51.046L269.709 42.0601L222.396 86.5096L237.075 95.7671Z"
                      fill="#3F3D56"
                    />
                    <path
                      d="M228.656 68.5951C235.963 68.5951 241.887 62.0142 241.887 53.8962C241.887 45.7782 235.963 39.1973 228.656 39.1973C221.348 39.1973 215.424 45.7782 215.424 53.8962C215.424 62.0142 221.348 68.5951 228.656 68.5951Z"
                      fill="#2F2E41"
                    />
                    <path
                      d="M229.719 45.5924C232.566 42.3849 236.012 39.9098 239.813 38.3412C242.253 37.337 244.909 36.7166 247.46 37.2869C250.011 37.8572 252.423 39.8176 253.135 42.598C253.717 44.8716 253.116 47.3195 252.213 49.4598C251.31 51.6 250.104 53.5846 249.374 55.8047C248.628 58.07 248.404 60.5062 248.722 62.8921C249.039 65.278 249.888 67.5381 251.191 69.4672C252.494 71.3963 254.21 72.9333 256.183 73.9387C258.157 74.9442 260.325 75.3862 262.491 75.2246C259.985 75.5979 257.674 76.9064 255.224 77.6029C252.774 78.2994 249.883 78.2521 248.062 76.3024C246.136 74.2394 246.097 70.8853 246.19 67.9148C246.329 63.499 246.467 59.0832 246.606 54.6674C246.676 52.4154 246.737 50.0913 246.006 47.9894C245.274 45.8875 243.537 44.0469 241.509 44.0661C239.971 44.0805 238.611 45.1151 237.378 46.1353C236.145 47.1556 234.84 48.2441 233.309 48.3959C231.778 48.5476 230.029 47.2888 230.144 45.5857L229.719 45.5924Z"
                      fill="#2F2E41"
                    />
                    <path
                      d="M178.401 152.592C177.131 152.984 175.775 152.845 174.591 152.201C173.407 151.557 172.477 150.453 171.977 149.098C171.477 147.742 171.441 146.231 171.878 144.849C172.314 143.466 173.191 142.31 174.344 141.599L185.775 127.192L195.443 129.513L181.845 144.309C182.179 145.096 182.354 145.954 182.357 146.824C182.36 147.694 182.192 148.554 181.864 149.344C181.535 150.133 181.055 150.834 180.457 151.395C179.859 151.956 179.157 152.365 178.401 152.592Z"
                      fill="#FFB7B7"
                    />
                    <path
                      d="M216.009 101.017L187.518 140.744L178.834 136.315L212.321 78.3994L216.009 101.017Z"
                      fill="#3F3D56"
                    />
                    <path
                      d="M193.275 220.978L186.484 220.86L187.301 246.569H193.273L193.275 220.978Z"
                      fill="#FFB7B7"
                    />
                    <path
                      d="M194.797 244.403L183.035 244.403H183.035C181.047 244.403 179.14 245.28 177.735 246.842C176.329 248.403 175.539 250.521 175.539 252.729V253L194.797 253.001L194.797 244.403Z"
                      fill="#2F2E41"
                    />
                    <path
                      d="M238.234 214.16L230.816 219.45L245.654 239.279L250.68 235.694L238.234 214.16Z"
                      fill="#FFB7B7"
                    />
                    <path
                      d="M250.906 232.957L241.009 240.016L241.008 240.016C239.336 241.21 238.158 243.092 237.735 245.25C237.311 247.407 237.677 249.664 238.751 251.522L238.882 251.75L255.088 240.192L250.906 232.957Z"
                      fill="#2F2E41"
                    />
                    <path
                      d="M240.876 135.655C240.876 135.655 224.395 74.8472 219.099 74.0254C213.802 73.2037 205.268 89.628 205.268 89.628C194.204 105.31 182.795 156.108 182.795 156.108C182.795 156.108 201.814 157.43 215.718 165.648C229.621 173.865 246.029 165.232 246.029 165.232L240.876 135.655Z"
                      fill="#3F3D56"
                    />
                    <path
                      opacity="0.1"
                      d="M240.876 135.655C240.876 135.655 224.395 74.8474 219.099 74.0256C213.802 73.2039 207.436 89.7948 207.436 89.7948C201.923 115.11 182.795 156.109 182.795 156.109C182.795 156.109 201.814 157.431 215.718 165.648C229.621 173.865 246.029 165.232 246.029 165.232L240.876 135.655Z"
                      fill="black"
                    />
                    <path
                      d="M227.354 117.462V148.017L230.591 192.279L246.763 225.76L239.044 231.884L216.991 200.037L208.269 168.414L194.571 238.417L184.279 237.601L191.427 140.542L204.99 113.223L227.354 117.462Z"
                      fill="#2F2E41"
                    />
                    <path
                      d="M210.737 87.9077C205.591 93.624 210.369 99.7485 210.369 99.7485L204.488 114.447L227.644 121.389L235.736 81.2204L230.223 74.6876C219.196 74.2792 219.19 74.0254 219.19 74.0254C217.258 76.1256 210.737 87.9077 210.737 87.9077Z"
                      fill="#6C63FF"
                    />
                    <path
                      d="M236.669 77.059C235.617 76.1966 234.422 75.5746 233.152 75.229C231.883 74.8834 230.564 74.8211 229.273 75.0456C227.981 75.2702 226.743 75.7771 225.629 76.5372C224.515 77.2972 223.548 78.2952 222.784 79.4733C216.963 88.4773 211.58 103.017 218.996 121.15C230.905 150.266 241.267 165.171 245.48 165.169C245.664 165.171 245.847 165.139 246.022 165.075C248.615 164.097 252.364 159.223 253.043 154.927C253.286 153.39 253.228 151.248 251.573 149.777C246.818 145.553 238.283 132.399 235.62 115.086C234.149 105.52 237.003 96.8059 239.655 91.1803C240.776 88.8526 241.104 86.1543 240.579 83.5799C240.054 81.0055 238.711 78.7276 236.797 77.1636L236.669 77.059Z"
                      fill="#3F3D56"
                    />
                    <path
                      d="M229.336 67.1508C234.056 64.2845 235.791 57.7102 233.21 52.4667C230.63 47.2233 224.712 45.2962 219.992 48.1626C215.272 51.0289 213.537 57.6032 216.117 62.8467C218.698 68.0902 224.616 70.0172 229.336 67.1508Z"
                      fill="#FFB7B7"
                    />
                    <path
                      d="M210.967 56.8389H225.031L225.176 54.5957L225.897 56.8389H228.062L228.348 52.3931L229.777 56.8389H233.968V56.6186C233.965 53.5235 232.856 50.5561 230.886 48.3675C228.916 46.1789 226.245 44.9478 223.459 44.9443H221.476C218.69 44.9478 216.018 46.1789 214.048 48.3675C212.078 50.5561 210.97 53.5235 210.967 56.6186V56.8389Z"
                      fill="#2F2E41"
                    />
                    <path
                      d="M231.843 64.9014L237.845 62.7379V46.5464H226.508L226.788 46.8577C230.694 51.1902 235.037 66.5612 231.843 64.9014Z"
                      fill="#2F2E41"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1362_14330">
                      <rect width="300" height="253.556" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ApprovalNotification = ({
  userName,
  onApproveOnlyThisTime,
  onApproveAlways,
}) => {
  return (
    <>
      <Overlay />
      <NotificationBox>
        <Heading>User Approved</Heading>
        {/* Buttons */}
        <Button onClick={onApproveOnlyThisTime}>Approve Only This Time</Button>
        <Button onClick={onApproveAlways}>Approve Always</Button>
      </NotificationBox>
    </>
  );
};

const AlumniCards = (props) => {
  const [showApprovalNotification, setShowApprovalNotification] =
    useState(false);
  const [approvedUserName, setApprovedUserName] = useState("");

  const screenSize = useScreenSize();

  function handleClickApprove() {
    const user = {
      status: "Approved",
      regNo: props.regNo,
      userName: props.UserName,
      name: props.DisplayName,
    };
    console.log(user);
    setApprovedUserName(user.userName);
    setShowApprovalNotification(true);
  }

  function handleApproveOnlyThisTime() {
    // Handle approve only this time action
    console.log("Approve only this time");
    setShowApprovalNotification(false);
  }

  function handleApproveAlways() {
    // Handle approve always action
    console.log("Approve always");
    setShowApprovalNotification(false);
  }
  function handleClickDeny() {
    const user = {
      status: "Denied",
      regNo: props.regNo,
      userName: props.UserName,
      name: props.DisplayName,
    };
    console.log(user);
  }

  return (
    <>
      <div className="lg:w-4/6 mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center w-full m-2">
            <table className="border-collapse w-full p-4">
              <tr>
                <td className="p-3 border text-sm text-center font-semibold text-gray-700">
                  Registration number
                </td>
                <td className="p-3 border text-sm  text-gray-700 ">
                  {props.regNo}
                </td>
              </tr>
              <tr>
                <td className="p-3 border text-sm text-center font-semibold text-gray-700">
                  User Name
                </td>
                <td className="p-3 border text-sm text-gray-800">
                  {props.UserName}
                </td>
              </tr>
              <tr>
                <td className="p-3 border text-sm text-center font-semibold text-gray-700">
                  Name
                </td>
                <td className="p-3 border text-sm text-gray-800">
                  {props.DisplayName}{" "}
                </td>
              </tr>
            </table>
          </div>

          {screenSize.width >= 700 && (
            <div className="flex-shrink-0">
              <img src={person} className="max-h-44 rounded-lg" alt="Person" />
            </div>
          )}
        </div>

        <div className="flex justify-center mt-8">
          <div className="px-4">
            <button
              className="px-6 bg-green-700 py-3 text-lg text-white rounded-lg"
              onClick={() => handleClickApprove()}
            >
              Approve
            </button>
            {showApprovalNotification && (
              <ApprovalNotification
                userName={approvedUserName}
                onApproveOnlyThisTime={handleApproveOnlyThisTime}
                onApproveAlways={handleApproveAlways}
              />
            )}
          </div>
          <div className="px-4">
            <button
              className="px-6 bg-red-700 py-3 text-lg text-white rounded-lg"
              onClick={() => handleClickDeny()}
            >
              Deny
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default approval_page;
