import Link from "next/link";

const Footer2 = () => {
  return (
    <footer>
      <div className="container-fluid one">
        <div className="row justify-content-center">
          <div className="col-lg-12 pl--95 mb-100 pr--95">
            <div className="footer-top">
              <div className="row g-lg-4 gy-5">
                <div className="col-lg-4  col-md-8 d-flex justify-content-lg-start">
                  <div className="footer-widget">
                    <div className="subscribed-area">
                      <h2>Don’t Missed To Subscribed!</h2>
                      <form>
                        <div className="form-inner">
                          <input type="text" placeholder="Enter Your Email" />
                          <button type="submit">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                            >
                              <path d="M15.9647 0.685806C16.0011 0.594942 16.01 0.495402 15.9904 0.399526C15.9707 0.303649 15.9233 0.215653 15.8541 0.146447C15.7849 0.0772403 15.6969 0.0298668 15.601 0.0101994C15.5052 -0.0094681 15.4056 -0.000564594 15.3147 0.0358061L0.76775 5.85481H0.76675L0.31475 6.03481C0.22914 6.06895 0.154635 6.1261 0.0994654 6.19994C0.0442956 6.27377 0.0106078 6.36142 0.00212322 6.4532C-0.00636132 6.54497 0.0106876 6.63731 0.0513867 6.72001C0.0920859 6.8027 0.154851 6.87254 0.23275 6.92181L0.64275 7.18181L0.64375 7.18381L5.63875 10.3618L8.81675 15.3568L8.81875 15.3588L9.07875 15.7688C9.12817 15.8464 9.19805 15.9089 9.28068 15.9493C9.36332 15.9897 9.45551 16.0066 9.54711 15.998C9.63871 15.9894 9.72617 15.9558 9.79985 15.9007C9.87354 15.8456 9.9306 15.7712 9.96475 15.6858L15.9647 0.685806ZM14.1317 2.57581L6.63775 10.0698L6.42275 9.73181C6.38336 9.66978 6.33078 9.6172 6.26875 9.57781L5.93075 9.36281L13.4247 1.86881L14.6027 1.39781L14.1327 2.57581H14.1317Z" />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="contact-area">
                      {/* <div className="hotline-area">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={28}
                            height={28}
                            viewBox="0 0 28 28"
                          >
                            <path d="M27.2653 21.5995L21.598 17.8201C20.8788 17.3443 19.9147 17.5009 19.383 18.1798L17.7322 20.3024C17.6296 20.4377 17.4816 20.5314 17.3154 20.5664C17.1492 20.6014 16.9759 20.5752 16.8275 20.4928L16.5134 20.3196C15.4725 19.7522 14.1772 19.0458 11.5675 16.4352C8.95784 13.8246 8.25001 12.5284 7.6826 11.4893L7.51042 11.1753C7.42683 11.0269 7.39968 10.8532 7.43398 10.6864C7.46827 10.5195 7.56169 10.3707 7.69704 10.2673L9.81816 8.61693C10.4968 8.08517 10.6536 7.1214 10.1784 6.40198L6.39895 0.734676C5.91192 0.00208106 4.9348 -0.21784 4.18082 0.235398L1.81096 1.65898C1.06634 2.09672 0.520053 2.80571 0.286612 3.63733C-0.56677 6.74673 0.0752209 12.1131 7.98033 20.0191C14.2687 26.307 18.9501 27.9979 22.1677 27.9979C22.9083 28.0011 23.6459 27.9048 24.3608 27.7115C25.1925 27.4783 25.9016 26.932 26.3391 26.1871L27.7641 23.8187C28.218 23.0645 27.9982 22.0868 27.2653 21.5995ZM26.9601 23.3399L25.5384 25.7098C25.2242 26.2474 24.7142 26.6427 24.1152 26.8128C21.2447 27.6009 16.2298 26.9482 8.64053 19.3589C1.0513 11.7697 0.398595 6.75515 1.18669 3.88421C1.35709 3.28446 1.75283 2.77385 2.2911 2.45921L4.66096 1.03749C4.98811 0.840645 5.41221 0.93606 5.62354 1.25397L7.67659 4.3363L9.39976 6.92078C9.60612 7.23283 9.53831 7.65108 9.24392 7.88199L7.1223 9.53232C6.47665 10.026 6.29227 10.9193 6.68979 11.6283L6.85826 11.9344C7.45459 13.0281 8.19599 14.3887 10.9027 17.095C13.6095 19.8012 14.9696 20.5427 16.0628 21.139L16.3694 21.3079C17.0783 21.7053 17.9716 21.521 18.4653 20.8753L20.1157 18.7537C20.3466 18.4595 20.7647 18.3918 21.0769 18.5979L26.7437 22.3773C27.0618 22.5885 27.1572 23.0128 26.9601 23.3399ZM15.8658 4.66809C20.2446 4.67296 23.7931 8.22149 23.798 12.6003C23.798 12.858 24.0069 13.0669 24.2646 13.0669C24.5223 13.0669 24.7312 12.858 24.7312 12.6003C24.7257 7.7063 20.7598 3.74029 15.8658 3.73494C15.6081 3.73494 15.3992 3.94381 15.3992 4.20151C15.3992 4.45922 15.6081 4.66809 15.8658 4.66809Z" />
                            <path d="M15.8658 7.46734C18.6991 7.47067 20.9951 9.76666 20.9984 12.5999C20.9984 12.7237 21.0476 12.8424 21.1351 12.9299C21.2226 13.0174 21.3412 13.0665 21.465 13.0665C21.5887 13.0665 21.7074 13.0174 21.7949 12.9299C21.8824 12.8424 21.9316 12.7237 21.9316 12.5999C21.9277 9.25147 19.2142 6.53801 15.8658 6.53418C15.6081 6.53418 15.3992 6.74306 15.3992 7.00076C15.3992 7.25846 15.6081 7.46734 15.8658 7.46734Z" />
                            <path d="M15.8658 10.2671C17.1536 10.2687 18.1972 11.3123 18.1988 12.6001C18.1988 12.7239 18.248 12.8426 18.3355 12.9301C18.423 13.0176 18.5417 13.0667 18.6654 13.0667C18.7891 13.0667 18.9078 13.0176 18.9953 12.9301C19.0828 12.8426 19.132 12.7239 19.132 12.6001C19.1299 10.7972 17.6688 9.33601 15.8658 9.33398C15.6081 9.33398 15.3992 9.54286 15.3992 9.80056C15.3992 10.0583 15.6081 10.2671 15.8658 10.2671Z" />
                          </svg>
                        </div>
                        <div className="content">
                          <span>To More Inquiry</span>
                          <h6>
                            <a href="tel:+990737621432">+990-737 621 432</a>
                          </h6>
                        </div>
                      </div> */}
                      <div className="hotline-area">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={26}
                            height={26}
                            viewBox="0 0 26 26"
                          >
                            <path d="M13.5367 14.7299C12.5654 14.7253 11.6005 14.573 10.675 14.2784C9.94863 14.0353 9.29972 13.6039 8.79454 13.0282C8.28935 12.4524 7.94598 11.7529 7.79946 11.0011C7.47317 9.42986 8.06813 7.76849 9.43051 6.44251C9.57687 6.30005 9.72894 6.16358 9.88637 6.03345C10.5736 5.45807 11.3905 5.05858 12.2666 4.86946C13.1428 4.68035 14.0517 4.70729 14.9151 4.94797C15.7431 5.21236 16.469 5.72653 16.9932 6.4199C17.5174 7.11328 17.8141 7.95188 17.8427 8.82061C17.9062 9.84533 17.5722 10.8551 16.9102 11.6398C16.6597 11.9553 16.3272 12.1956 15.9491 12.3344C15.571 12.4732 15.162 12.5052 14.7669 12.4267C14.6039 12.3929 14.4494 12.3265 14.3126 12.2316C14.1758 12.1367 14.0596 12.0151 13.9709 11.8743C13.8913 11.7374 13.8401 11.5859 13.8205 11.4288C13.8008 11.2717 13.8131 11.1122 13.8565 10.9599C14.2357 9.52736 14.6209 7.35033 14.6248 7.32866C14.6347 7.27261 14.6555 7.21906 14.6861 7.17106C14.7167 7.12307 14.7565 7.08157 14.8031 7.04894C14.8498 7.0163 14.9024 6.99317 14.9579 6.98087C15.0135 6.96857 15.071 6.96733 15.127 6.97724C15.1831 6.98714 15.2366 7.00798 15.2846 7.03858C15.3326 7.06918 15.3741 7.10893 15.4067 7.15557C15.4394 7.2022 15.4625 7.25481 15.4748 7.31038C15.4871 7.36596 15.4883 7.42341 15.4784 7.47946C15.4624 7.57003 15.0828 9.71413 14.6946 11.1814C14.6809 11.2216 14.6756 11.2643 14.6789 11.3067C14.6823 11.3491 14.6942 11.3903 14.7141 11.4279C14.774 11.5108 14.8644 11.5664 14.9654 11.5826C15.2073 11.623 15.4557 11.5965 15.6836 11.506C15.9116 11.4155 16.1105 11.2645 16.2589 11.0691C16.773 10.4541 17.0306 9.66472 16.9782 8.86481C16.9575 8.17325 16.7233 7.50504 16.3078 6.95187C15.8923 6.3987 15.3157 5.98767 14.6573 5.77519C13.9319 5.57566 13.1689 5.55562 12.434 5.7168C11.6992 5.87798 11.0146 6.21553 10.4393 6.70034C10.3002 6.81604 10.1646 6.93694 10.0346 7.06347C9.36117 7.71866 8.28522 9.07844 8.64792 10.8247C8.76766 11.4243 9.04196 11.9821 9.44365 12.443C9.84535 12.9039 10.3605 13.2519 10.938 13.4524C12.9703 14.1007 15.891 14.1791 17.4293 12.266C17.5022 12.1793 17.6061 12.1246 17.7188 12.1136C17.8315 12.1025 17.944 12.1361 18.0323 12.207C18.1206 12.2779 18.1776 12.3805 18.1912 12.493C18.2047 12.6054 18.1737 12.7186 18.1048 12.8085C16.9669 14.2238 15.2353 14.7299 13.5367 14.7299Z" />
                            <path d="M12.0532 12.4837C11.5951 12.4917 11.1482 12.3416 10.7879 12.0586C9.95631 11.393 9.93334 10.2365 10.1665 9.44911C10.2453 9.18694 10.3506 8.93345 10.4815 8.69295C10.8066 8.03693 11.3265 7.49738 11.97 7.14814C12.3603 6.94569 12.8053 6.87413 13.2394 6.94404C13.6735 7.01396 14.0736 7.22164 14.3806 7.5364C14.6933 7.87907 14.9288 8.28484 15.0713 8.72632C15.1071 8.83391 15.0993 8.95127 15.0496 9.05319C14.9999 9.15511 14.9122 9.23348 14.8054 9.27148C14.6985 9.30948 14.581 9.30408 14.4781 9.25643C14.3752 9.20879 14.2951 9.1227 14.2549 9.01665C14.1522 8.69059 13.9814 8.39004 13.754 8.13483C13.5752 7.95191 13.3415 7.83246 13.0885 7.79468C12.8355 7.7569 12.5771 7.80284 12.3526 7.92553C11.87 8.1977 11.4822 8.61094 11.2411 9.10981C11.1399 9.2968 11.0581 9.4937 10.9972 9.6974C10.8286 10.2668 10.8659 11.0104 11.3304 11.3822C11.8382 11.7904 12.6954 11.6179 13.1777 11.2019C13.5369 10.8783 13.8455 10.5026 14.0933 10.0874C14.1233 10.039 14.1625 9.99704 14.2088 9.96384C14.255 9.93064 14.3074 9.90687 14.3628 9.8939C14.4182 9.88092 14.4757 9.87899 14.5318 9.88821C14.588 9.89743 14.6418 9.91763 14.6902 9.94765C14.7386 9.97766 14.7805 10.0169 14.8137 10.0632C14.8469 10.1094 14.8707 10.1617 14.8837 10.2172C14.8967 10.2726 14.8986 10.33 14.8894 10.3862C14.8801 10.4424 14.8599 10.4962 14.8299 10.5446C14.5362 11.0337 14.1706 11.4759 13.7453 11.8562C13.2715 12.256 12.6731 12.4779 12.0532 12.4837Z" />
                            <path d="M24.6996 26.0015H1.29998C0.955309 26.0011 0.624854 25.864 0.381135 25.6203C0.137416 25.3766 0.000344239 25.0462 8.47364e-08 24.7015V8.66841C-5.14206e-05 8.58603 0.023378 8.50535 0.0675423 8.43581C0.111707 8.36628 0.174776 8.31077 0.249359 8.2758C0.323942 8.24083 0.406948 8.22784 0.488649 8.23836C0.57035 8.24887 0.647361 8.28246 0.710655 8.33518L11.3428 17.1716C11.8091 17.5569 12.3952 17.7677 13.0002 17.7677C13.6052 17.7677 14.1913 17.5569 14.6577 17.1716L25.2889 8.33474C25.3523 8.282 25.4293 8.24841 25.511 8.23791C25.5928 8.22741 25.6758 8.24043 25.7504 8.27546C25.825 8.31048 25.8881 8.36605 25.9322 8.43565C25.9763 8.50525 25.9997 8.58599 25.9996 8.66841V24.7015C25.9992 25.0462 25.8622 25.3766 25.6184 25.6203C25.3747 25.864 25.0443 26.0011 24.6996 26.0015ZM0.866653 9.59183V24.7015C0.866653 24.9407 1.06078 25.1348 1.29998 25.1348H24.6996C24.8145 25.1348 24.9247 25.0892 25.006 25.0079C25.0873 24.9266 25.1329 24.8164 25.1329 24.7015V9.59183L15.2106 17.838C14.5887 18.352 13.807 18.6333 13.0002 18.6335C12.1933 18.6336 11.4116 18.3527 10.7894 17.8389L0.866653 9.59183Z" />
                            <path d="M0.434172 9.10179C0.342147 9.10197 0.252454 9.07285 0.178087 9.01865C0.103719 8.96444 0.0485401 8.88797 0.020542 8.8003C-0.00745601 8.71264 -0.00681877 8.61834 0.0223615 8.53106C0.0515417 8.44379 0.10775 8.36807 0.182842 8.31487L4.08278 5.55025C4.17656 5.48377 4.29291 5.45726 4.40623 5.47656C4.51955 5.49586 4.62057 5.55939 4.68705 5.65316C4.75354 5.74694 4.78005 5.86329 4.76075 5.97662C4.74145 6.08994 4.67792 6.19095 4.58414 6.25744L0.684201 9.02206C0.611181 9.074 0.52378 9.10187 0.434172 9.10179ZM25.5662 9.10179C25.4766 9.10187 25.3892 9.074 25.3162 9.02206L21.4163 6.25744C21.3235 6.19062 21.2609 6.08984 21.242 5.97706C21.2232 5.86427 21.2498 5.74862 21.3159 5.65531C21.382 5.56201 21.4823 5.4986 21.5949 5.47892C21.7075 5.45924 21.8234 5.48488 21.9172 5.55025L25.8171 8.31487C25.8922 8.36802 25.9483 8.44367 25.9775 8.53086C26.0067 8.61805 26.0075 8.71227 25.9796 8.79989C25.9517 8.88751 25.8966 8.96399 25.8224 9.01826C25.7482 9.07253 25.6582 9.10179 25.5662 9.10179ZM17.0041 3.03522C16.9144 3.0353 16.8269 3.00744 16.7537 2.95549L14.6824 1.48651C14.2165 1.09272 13.6271 0.874976 13.0171 0.871254C12.4071 0.867532 11.8151 1.07807 11.3445 1.46615L9.24716 2.95549C9.15339 3.02198 9.03704 3.04848 8.92371 3.02918C8.81039 3.00988 8.70937 2.94635 8.64289 2.85258C8.57641 2.7588 8.5499 2.64245 8.5692 2.52912C8.5885 2.4158 8.65203 2.31479 8.7458 2.2483L10.8171 0.779325C11.4376 0.271931 12.2154 -0.00360176 13.017 3.55561e-05C13.8186 0.00367287 14.5938 0.286253 15.2097 0.799258L17.255 2.2483C17.3301 2.3015 17.3863 2.37722 17.4155 2.46449C17.4447 2.55177 17.4453 2.64607 17.4173 2.73373C17.3893 2.8214 17.3342 2.89787 17.2598 2.95208C17.1854 3.00628 17.0957 3.0354 17.0037 3.03522H17.0041ZM0.715401 25.7675C0.626173 25.7677 0.539066 25.7403 0.465979 25.6891C0.392892 25.638 0.337387 25.5655 0.307046 25.4815C0.276706 25.3976 0.273008 25.3064 0.296459 25.2203C0.31991 25.1342 0.369366 25.0575 0.438072 25.0005L10.3266 16.7847C10.3704 16.7483 10.4209 16.7209 10.4753 16.7041C10.5296 16.6873 10.5868 16.6813 10.6435 16.6865C10.7001 16.6918 10.7552 16.7082 10.8056 16.7347C10.8559 16.7612 10.9006 16.7974 10.9369 16.8412C10.9733 16.885 11.0007 16.9355 11.0175 16.9899C11.0343 17.0443 11.0403 17.1014 11.0351 17.1581C11.0298 17.2148 11.0134 17.2699 10.9869 17.3202C10.9604 17.3706 10.9242 17.4152 10.8804 17.4516L0.991863 25.6674C0.914246 25.7321 0.816424 25.7675 0.715401 25.7675ZM25.2846 25.7675C25.1835 25.7676 25.0857 25.7322 25.0081 25.6674L15.1196 17.4516C15.0747 17.4156 15.0374 17.371 15.0099 17.3204C14.9824 17.2699 14.9652 17.2143 14.9594 17.1571C14.9536 17.0998 14.9593 17.042 14.9761 16.9869C14.9929 16.9319 15.0205 16.8807 15.0573 16.8365C15.0941 16.7922 15.1393 16.7557 15.1903 16.7291C15.2414 16.7025 15.2972 16.6863 15.3546 16.6816C15.4119 16.6768 15.4697 16.6835 15.5244 16.7013C15.5791 16.719 15.6298 16.7475 15.6734 16.7851L25.5619 25.001C25.6306 25.0579 25.6801 25.1347 25.7035 25.2207C25.727 25.3068 25.7233 25.3981 25.6929 25.482C25.6626 25.5659 25.6071 25.6384 25.534 25.6896C25.4609 25.7408 25.3738 25.7677 25.2846 25.7675Z" />
                            <path d="M21.6668 12.3427C21.5518 12.3427 21.4416 12.2971 21.3604 12.2158C21.2791 12.1346 21.2334 12.0243 21.2334 11.9094V3.03836C21.2321 3.04703 21.2148 3.03489 21.1858 3.03489H4.81471C4.80523 3.03432 4.79574 3.03568 4.7868 3.03888C4.77786 3.04208 4.76967 3.04707 4.76271 3.05353L4.76704 11.9094C4.76704 12.0243 4.72139 12.1346 4.64013 12.2158C4.55886 12.2971 4.44864 12.3427 4.33372 12.3427C4.21879 12.3427 4.10857 12.2971 4.02731 12.2158C3.94604 12.1346 3.90039 12.0243 3.90039 11.9094V3.03489C3.9072 2.79889 4.00723 2.57519 4.17859 2.41276C4.34994 2.25033 4.57867 2.16241 4.81471 2.16824H21.1858C21.4218 2.16241 21.6505 2.25033 21.8219 2.41276C21.9933 2.57519 22.0933 2.79889 22.1001 3.03489V11.9094C22.1001 12.0243 22.0544 12.1346 21.9732 12.2158C21.8919 12.2971 21.7817 12.3427 21.6668 12.3427Z" />
                          </svg>
                        </div>
                        <div className="content">
                          <span>To Send Mail</span>
                          <h6>
                            <a href="mailto:info@gmail.com">info@indenta.ae</a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 d-flex justify-content-lg-center justify-content-md-end">
                  <div className="footer-widget">
                    <div className="widget-title">
                      <h3>About Us</h3>
                    </div>
                    <div className="menu-container">
                      <ul>
                        <li>
                          <Link legacyBehavior href="/">
                            <a>Home</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/about">
                            <a>Our Story</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/services">
                            <a>Service</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/our-people">
                            <a>Our Consultants</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/contact">
                            <a>Contact Us</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex justify-content-lg-center">
                  <div className="footer-widget">
                    <div className="widget-title">
                      <h3>Our Services</h3>
                    </div>
                    <div className="menu-container">
                      <ul>
                        <li>
                          <Link legacyBehavior href="/services">
                            <a>Credit Card</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/services">
                            <a>SME Loans</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/services">
                            <a>Account Opening</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/services">
                            <a>Corporate Banking</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/services">
                            <a>Mortgage Finance</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-2 col-md-6 d-flex justify-content-md-end">
                  <div className="footer-widget">
                    <div className="widget-title">
                      <h3>Legelity</h3>
                    </div>
                    <div className="menu-container">
                      <ul>
                        <li>
                          <Link legacyBehavior href="/terms-conditions">
                            <a>Privacy &amp; Policy</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/terms-conditions">
                            <a>Terms &amp; Condition</a>
                          </Link>
                        </li>
                        <li>
                          <a href="#">Cookie Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="footer-menu-wrap">
              <div className="footer-logo">
                <Link legacyBehavior href="/">
                  <a>
                    <img src="/assets/img/logo1.png" alt="footer-logo" />
                  </a>
                </Link>
              </div>
              {/* <ul className="footer-menu">
                <li>
                  <Link legacyBehavior href="/services1">
                    <a>
                      International Business
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                        />
                      </svg>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/services1">
                    <a>
                      Marketing Research
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                        />
                      </svg>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/services1">
                    <a>
                      Finance Consulting
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                        />
                      </svg>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/services1">
                    <a>
                      Human Resources
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                        />
                      </svg>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/services1">
                    <a>
                      Technology
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                        />
                      </svg>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/services1">
                    <a>
                      Start-up
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                        />
                      </svg>
                    </a>
                  </Link>
                </li>
              </ul> */}
            </div>
            <div className="footer-btm">
              <div className="copyright-area">
                <p>
                  Copyright 2024 <a href="#">Indenta Solutions</a>
                   {/* | Design By{" "}
                  <a href="https://www.egenslab.com/">Egens Lab</a> */}
                </p>
              </div>
              <ul className="social-area">
                <li>
                  <a href="https://www.facebook.com/">
                    <i className="bx bxl-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <i className="bx bxl-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/">
                    <i className="bx bxl-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <i className="bx bxl-instagram-alt" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
