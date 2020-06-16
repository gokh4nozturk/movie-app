import * as React from "react";

function SvgLogo(props) {
  return (
    <svg width="5em" height="5em" viewBox="0 0 96.483 94.699" {...props}>
      <defs>
        <filter
          id="logo_svg__b"
          x={11.746}
          y={5.764}
          width={44.553}
          height={44.552}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={3} result="c" />
          <feFlood floodOpacity={0.161} />
          <feComposite operator="in" in2="c" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="logo_svg__c"
          x={40.966}
          y={5.764}
          width={44.552}
          height={44.552}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={3} result="e" />
          <feFlood floodOpacity={0.161} />
          <feComposite operator="in" in2="e" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="logo_svg__d"
          x={27.757}
          y={44.721}
          width={41.886}
          height={26.32}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={3} result="g" />
          <feFlood floodOpacity={0.161} />
          <feComposite operator="in" in2="g" />
          <feComposite in="SourceGraphic" />
        </filter>
        <linearGradient
          id="logo_svg__a"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#00ffc6" />
          <stop offset={1} stopColor="#04b28b" />
        </linearGradient>
      </defs>
      <g transform="translate(9.662)">
        <rect
          width={66.483}
          height={15.667}
          rx={7.834}
          transform="translate(5.338 64.032)"
          opacity={0.25}
        />
        <path
          d="M48.734 24.367c0 12.183-10.909 24.367-24.367 24.367S0 36.55 0 24.367 10.91 0 24.367 0s24.367 12.183 24.367 24.367z"
          fill="#fff"
          opacity={0.05}
        />
        <path
          d="M77.821 24.367c0 12.183-10.909 24.367-24.367 24.367S29.087 36.55 29.087 24.367 39.997 0 53.454 0s24.367 12.183 24.367 24.367z"
          fill="#fff"
          opacity={0.05}
        />
        <g transform="translate(-69.916 -48.236)">
          <rect
            width={55.483}
            height={37.667}
            rx={8}
            transform="translate(81.254 82.268)"
            fill="url(#logo_svg__a)"
          />
          <path
            d="M152.827 89.764a2.563 2.563 0 00-3.547-.906l-8.6 4.981-2.197 1.284v11.92l2.038 1.208c.076 0 .076.075.151.075l8.453 4.906a2.322 2.322 0 001.434.453 2.545 2.545 0 002.566-2.566V101.01l.075-9.963a1.976 1.976 0 00-.373-1.283z"
            fill="#00ffc6"
          />
          <g transform="translate(60.25 48.24)" filter="url(#logo_svg__b)">
            <path
              d="M34.027 38.314A13.276 13.276 0 1020.75 25.038a13.267 13.267 0 0013.277 13.276zm0-18.718a5.442 5.442 0 11-5.442 5.442 5.335 5.335 0 015.442-5.442z"
              fill="#00ff6e"
            />
          </g>
          <g transform="translate(60.25 48.24)" filter="url(#logo_svg__c)">
            <path
              d="M63.24 38.314a13.276 13.276 0 10-13.28-13.276 13.267 13.267 0 0013.28 13.276zm0-18.718a5.442 5.442 0 11-5.442 5.442 5.437 5.437 0 015.442-5.442z"
              fill="#00ff6e"
            />
          </g>
          <g transform="translate(60.25 48.24)" filter="url(#logo_svg__d)">
            <path
              d="M38.858 52.818a13.031 13.031 0 009.7 4.718 14.014 14.014 0 009.973-4.65"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth={3}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgLogo;
