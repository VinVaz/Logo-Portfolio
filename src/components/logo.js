import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'link.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
      }}
      {...rest}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={195}
        height={37}
        fill="none"
        {...rest}
      >
        <path
          style={{
            opacity: 1,
            vectorEffect: 'none',
            fill: '#333',
            fillOpacity: 1,
            fillRule: 'nonzero',
            stroke: 'none',
            strokeWidth: 12.53293991,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 4,
            strokeDasharray: 'none',
            strokeDashoffset: 0,
            strokeOpacity: 1,
            paintOrder: 'stroke fill markers',
          }}
          d="M11.12 4.912 6.547 12.64l7.674 12.967h4.558l3.887-6.6-8.345-14.094Zm24.023 0L20.7 29.35c.653 1.087 1.675 1.94 2.636 2.753 1.192 1.005 2.4 1.701 3.908 2.3l3.399-1.917 14.22-24.022V4.912Z"
        />
        <text
          xmlSpace="preserve"
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 700,
            fontStretch: 'normal',
            fontSize: '17.59858131px',
            lineHeight: 1.25,
            fontFamily: 'sans-serif',
            InkscapeFontSpecification: "'sans-serif, Bold'",
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontFeatureSettings: 'normal',
            textAlign: 'start',
            letterSpacing: 0,
            wordSpacing: 0,
            writingMode: 'lr-tb',
            textAnchor: 'start',
            fill: '#666',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 0.94282228,
          }}
          x={72.088}
          y={29.473}
          transform="scale(.94138 1.06226)"
        >
          <tspan
            x={72.088}
            y={29.473}
            style={{
              fontStyle: 'normal',
              fontVariant: 'normal',
              fontWeight: 700,
              fontStretch: 'normal',
              fontSize: '17.59858131px',
              fontFamily: 'sans-serif',
              InkscapeFontSpecification: "'sans-serif, Bold'",
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              textAlign: 'start',
              writingMode: 'lr-tb',
              textAnchor: 'start',
              fill: '#666',
              strokeWidth: 0.94282228,
            }}
          >
            {'Vin\xEDcius Vaz'}
          </tspan>
        </text>
      </svg>
    </Link>
  );
}
