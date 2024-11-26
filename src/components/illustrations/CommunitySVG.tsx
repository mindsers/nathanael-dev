import { useTranslations } from 'next-intl'

export function CommunitySVG() {
  const t = useTranslations('CommunitySVG')

  return (
    <svg
      height={350}
      viewBox="0 0 1080 1080"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule={'evenodd'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
    >
      <g transform="matrix(1.3336,0,0,1.3336,-46.6093,-29.1874)">
        <ellipse
          cx="439.868"
          cy="426.804"
          rx="392.448"
          ry="388.913"
          fill="#222"
          stroke="#222"
          strokeWidth={1.5}
        />
      </g>
      <g transform="matrix(1.15769,0,0,1.10412,4.70615,-28.4134)">
        <ellipse
          cx="354.496"
          cy="440.49"
          rx="308.586"
          ry="315.112"
          fill="#444"
          stroke="#444"
          strokeWidth={1.5}
        />
      </g>
      <g>
        <text
          x="315px"
          y="725px"
          style={{ fontFamily: 'Playfair Display', fontWeight: 600, fontSize: 36, fill: 'white' }}
        >
          {t('socialMedia1')}
        </text>
        <text
          x="340px"
          y="765px"
          style={{ fontFamily: 'Playfair Display', fontWeight: 600, fontSize: 36, fill: 'white' }}
        >
          {t('socialMedia2')}
        </text>
      </g>
      <g transform="matrix(0.752987,0,0,0.874187,33.8521,26.8697)">
        <ellipse
          cx="420.462"
          cy="440.967"
          rx="336.506"
          ry="289.852"
          fill="#888"
          stroke="#888"
          strokeWidth={1.5}
        />
      </g>
      <g transform="matrix(1.3336,0,0,1.3336,8.55032,-35.0192)">
        <ellipse
          cx="228.427"
          cy="307.492"
          rx="130.58"
          ry="123.398"
          fill="#ebebeb"
          stroke="#ebebeb"
          strokeWidth={1.5}
        />
      </g>
      <g>
        <text
          x="170px"
          y="390px"
          style={{ fontFamily: 'Playfair Display', fontWeight: 600, fontSize: 36, fill: '#222' }}
        >
          {t('paidMailingList1')}
        </text>
        <g transform="matrix(24,0,0,24,395.753,436.604)"></g>
        <text
          x="210px"
          y="430px"
          style={{ fontFamily: 'Playfair Display', fontWeight: 600, fontSize: 36, fill: '#222' }}
        >
          {t('paidMailingList2')}
        </text>
      </g>
      <g>
        <text
          x="265px"
          y="590px"
          style={{ fontFamily: 'Playfair Display', fontWeight: 600, fontSize: 36, fill: 'white' }}
        >
          {t('mailingList1')}
        </text>
        <g transform="matrix(24,0,0,24,367.34,626.222)"></g>
        <text
          x="260px"
          y="625px"
          style={{ fontFamily: 'Playfair Display', fontWeight: 600, fontSize: 36, fill: 'white' }}
        >
          {t('mailingList2')}
        </text>
      </g>
      <g>
        <text
          x="470px"
          y="900px"
          style={{ fontFamily: 'Playfair Display', fontWeight: 600, fontSize: 36, fill: 'white' }}
        >
          {t('blog')}
        </text>
      </g>
    </svg>
  )
}
