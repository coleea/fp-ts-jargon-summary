import type { BoxProps } from '@chakra-ui/react'
import { Box, Icon as ChakraIcon, Img, Text } from '@chakra-ui/react'

type Props = BoxProps

const step2 = (props: Props) => {
  return (
    <Box className="step2" {...props}>
      <Box className="step-images-wrap">
        <svg
          className="step-images"
          width="255"
          height="334"
          viewBox="0 0 255 334"
          fill="none"
        >
          <defs>
            <pattern
              id="img1"
              patternUnits="userSpaceOnUse"
              width="30"
              height="30"
              x="15"
              y="7"
            >
              <image
                href="image/dummy/unsplash_dmkmrNptMpw.jpeg"
                width="30"
                height="30"
              />
            </pattern>
          </defs>
          <path
            d="M8 0.5H237C241.142 0.5 244.5 3.85786 244.5 8V287C244.5 288.933 242.933 290.5 241 290.5H4C2.06701 290.5 0.5 288.933 0.5 287V7.99999C0.5 3.85786 3.85786 0.5 8 0.5Z"
            fill="#373737"
            stroke="black"
          />
          <path
            opacity="0.5"
            d="M1 8C1 4.13401 4.13401 1 8 1H237C240.866 1 244 4.13401 244 8V43H1V8Z"
            fill="#555555"
          />
          <circle cx="222" cy="22" r="12" fill="#555555" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M222.601 22L226.601 18L226 17.3989L222 21.3989L218 17.399L217.399 18L221.399 22L217.399 26L218 26.601L222 22.601L226 26.601L226.601 26L222.601 22Z"
            fill="white"
          />
          <g clipPath="url(#clip0_992_16094)">
            <rect
              opacity="0.2"
              x="12"
              y="141"
              width="217"
              height="40"
              rx="8"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M12 195C12 190.582 15.5817 187 20 187H221C225.418 187 229 190.582 229 195V393H12V195Z"
              fill="white"
            />
            <path opacity="0.1" d="M12 224H229" stroke="#EAEAEA" />
            <path opacity="0.1" d="M12 261H229" stroke="#EAEAEA" />
          </g>
          <g opacity="0.2">
            <rect x="15" y="7" width="29" height="30" fill="#373737" />
            <rect x="15" y="7" width="29" height="30" fill="url(#img1)" />
          </g>
          <path
            d="M58.4395 17.8398V16.8828H57.5508V17.8398C57.5439 20.0205 54.9463 21.8184 53.0527 22.1875L53.4629 22.9258C55.1719 22.4951 57.2363 21.1826 58.002 19.3369C58.7676 21.1895 60.8457 22.502 62.541 22.9258L62.9648 22.1875C61.0645 21.8252 58.4395 20 58.4395 17.8398ZM52.5332 26.3711H63.5801V25.6465H52.5332V26.3711ZM73.6758 17.293H65.4727V18.0312H72.8418V18.8105C72.8418 19.4258 72.835 20.0273 72.8145 20.6562L65.1582 20.998L65.2949 21.7227L72.7803 21.3125C72.7188 22.29 72.5957 23.3359 72.3223 24.5391L73.1836 24.6211C73.6758 22.2217 73.6758 20.5947 73.6758 18.8105V17.293ZM64.1328 26.2891H75.125V25.5508H64.1328V26.2891ZM85.6309 16.0078H84.7832V24.8945H85.6309V16.0078ZM76.334 17.6074H80.9688V19.5488H76.3613V23.1035H77.3184C79.5469 23.1035 81.1943 23.0283 83.2383 22.6934L83.1426 21.9688C81.1465 22.3037 79.5127 22.3789 77.3184 22.3789H77.1953V20.2461H81.8164V16.8828H76.334V17.6074ZM77.7969 27.7793H86V27.0547H78.6582V24.2109H77.7969V27.7793ZM98.5703 18.1816H96.7246V16.0078H95.8633V24.1289H96.7246V21.5723H98.5703V20.834H96.7246V18.9199H98.5703V18.1816ZM87.332 22.1875L87.8105 22.8848C89.2256 22.3105 90.374 21.1484 90.873 19.6514C91.3994 20.9775 92.5273 22.0303 93.8672 22.5293L94.3457 21.8594C92.6299 21.2578 91.2559 19.7129 91.2695 18.0039V16.6641H90.4219V17.9629C90.4219 19.8906 89.1025 21.5176 87.332 22.1875ZM88.5215 27.3281L88.877 28.0117C90.6133 27.6699 92.4111 26.7471 93.1289 25.2842C93.833 26.7471 95.624 27.6699 97.3672 28.0117L97.7227 27.3281C95.7266 26.9795 93.5391 25.7354 93.5391 23.8965V23.5H92.6914V23.8965C92.6914 25.7354 90.5176 26.9795 88.5215 27.3281Z"
            fill="#7F7F7F"
          />
          <g clipPath="url(#clip1_992_16094)">
            <rect
              opacity="0.43"
              x="-3"
              y="73"
              width="46"
              height="46"
              rx="10"
              fill="#C4C4C4"
            />
            <rect
              opacity="0.43"
              x="56"
              y="73"
              width="46"
              height="46"
              rx="10"
              fill="#C4C4C4"
            />
            <rect x="115" y="65" width="62" height="62" rx="10" fill="#CCF656" />
            <rect
              opacity="0.43"
              x="190"
              y="73"
              width="46"
              height="46"
              rx="10"
              fill="#C4C4C4"
            />
          </g>
          <path d="M157.206 82.2439L157.206 103.561" stroke="#2903F5" />
          <path d="M130.3 117.024L141.511 117.024" stroke="#2903F5" />
          <path
            d="M159.448 326.864V333L228.394 316.171C246.892 265.122 257.542 213.512 252.497 199.488C247.452 185.463 240.165 186.585 231.197 186.585C222.228 186.585 223.349 178.732 209.896 179.293C196.443 179.854 197.565 170.878 187.475 170.878C179.403 170.878 176.638 178.358 176.264 182.098L174.583 152.366L169.955 122.052C169.07 116.256 164.086 111.976 158.224 111.976C151.321 111.976 145.875 117.845 146.391 124.729L148.798 156.854V214.882C148.798 216.05 147.314 216.547 146.61 215.616L135.486 200.889C130.673 194.517 121.338 193.872 115.694 199.521C111.696 203.522 110.752 209.603 113.392 214.605C118.102 223.53 124.775 236.539 130.861 252.78C131.284 253.911 131.741 255.016 132.227 256.096C142.577 279.084 159.448 301.653 159.448 326.864Z"
            fill="#2A2A2A"
          />
          <path d="M142.673 100.411L149.351 107.146" stroke="#2903F5" />
          <path d="M138.148 95.8645L140.937 98.6881" stroke="#2903F5" />
          <path d="M174.002 98.3423L165.188 107.231" stroke="#2903F5" />
          <path
            d="M159.448 333V326.864C159.448 301.653 142.577 279.084 132.227 256.096C131.741 255.016 131.284 253.911 130.861 252.78C124.766 236.514 118.081 223.49 113.37 214.564C110.743 209.586 111.683 203.535 115.661 199.553V199.553C121.307 193.903 130.655 194.586 135.419 200.997L146.6 216.042C147.301 216.985 148.798 216.49 148.798 215.315V156.854L146.391 124.729C145.875 117.845 151.321 111.976 158.224 111.976V111.976C164.086 111.976 169.07 116.256 169.955 122.052L174.583 152.366L176.264 182.098C176.638 178.358 179.403 170.878 187.475 170.878C197.565 170.878 196.443 179.854 209.896 179.293C223.349 178.732 222.228 186.585 231.197 186.585C240.165 186.585 247.452 185.463 252.497 199.488C257.542 213.512 249.134 253.902 238.484 285.878L235.12 297.659"
            stroke="#CCF656"
            strokeLinecap="round"
          />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use transform="translate(0 -0.225) scale(0.00232558 0.00224806)" />
            </pattern>
            <clipPath id="clip0_992_16094">
              <rect width="217" height="149" fill="white" transform="translate(12 141)" />
            </clipPath>
            <clipPath id="clip1_992_16094">
              <rect width="243" height="62" fill="white" transform="translate(1 65)" />
            </clipPath>
            <image id="image0_992_16094" width="430" height="645" />
          </defs>
        </svg>
      </Box>
      <Box className="tuto-text-wrap">
        <Text color="grey.1">step2</Text>
        <Box className="share-icons" mt={10}>
          <ChakraIcon
            display="inline"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5822 6.39545L6.37268 11.7444L16.8148 16.5236"
              stroke="#EAEAEA"
              strokeLinecap="round"
            />
            <circle cx="15.9766" cy="7" r="2.5" fill="#373737" stroke="#EAEAEA" />
            <circle cx="15.9766" cy="16.0002" r="2.5" fill="#373737" stroke="#EAEAEA" />
            <circle cx="6" cy="12" r="2.5" fill="#373737" stroke="#EAEAEA" />
          </ChakraIcon>
          <ChakraIcon
            display="inline"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5982 6.59907L12.0277 4L9.40002 6.59907"
              stroke="#EAEAEA"
              strokeLinejoin="bevel"
            />
            <path d="M11.9992 4V11.7972" stroke="#EAEAEA" strokeLinejoin="bevel" />
            <path
              d="M14.6925 8.76495H17.6306V17.4285H6.36798V8.76495H9.30606"
              stroke="#EAEAEA"
            />
          </ChakraIcon>
          <ChakraIcon
            display="inline"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.4219 16.1275H11.9219L12.7306 16.5208L12.4219 16.1275ZM12.4219 12.8424H12.9219L12.4097 12.3425L12.4219 12.8424ZM18.9994 10.9633L19.3082 11.3566L19.3104 10.5718L18.9994 10.9633ZM12.4219 5.73877L12.7329 5.34725L11.9219 5.73877H12.4219ZM12.4219 8.9742L12.382 9.47261L12.9219 8.9742H12.4219ZM5.15615 17.9093L4.66164 17.9832L5.64516 18.0136L5.15615 17.9093ZM12.9219 16.1275V12.8424H11.9219V16.1275H12.9219ZM18.6906 10.5701L12.1131 15.7343L12.7306 16.5208L19.3082 11.3566L18.6906 10.5701ZM12.1109 6.13029L18.6884 11.3549L19.3104 10.5718L12.7329 5.34725L12.1109 6.13029ZM12.9219 8.9742V5.73877H11.9219V8.9742H12.9219ZM5.65066 17.8355C5.0947 14.1136 6.14986 12.0143 7.57873 10.8509C9.04391 9.65786 11.0058 9.3625 12.382 9.47261L12.4618 8.4758C10.9202 8.35245 8.67348 8.6699 6.94732 10.0754C5.18485 11.5105 4.06599 13.9956 4.66164 17.9832L5.65066 17.8355ZM12.4097 12.3425C7.16769 12.4705 5.05689 15.9773 4.66714 17.8051L5.64516 18.0136C5.9549 16.561 7.72946 13.4571 12.4341 13.3422L12.4097 12.3425Z"
              fill="#EAEAEA"
            />
          </ChakraIcon>
          <Text
            display="inline"
            fontSize={26}
            color="white"
            fontFamily="ug"
            fontWeight="b"
          >
            눌러
          </Text>
        </Box>
        <Text fontSize={26} color="white" fontFamily="ug" fontWeight="b" mt={10}>
          <Text display="inline" color="green.2">
            포스티드에 공유
          </Text>
          하면 끝!
        </Text>
      </Box>
    </Box>
  )
}
export default step2