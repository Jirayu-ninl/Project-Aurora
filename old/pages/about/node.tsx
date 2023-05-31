import { css } from '@emotion/css'
import Color from 'views/theme/color'

const AboutNode = () => {
  const Container = css`
    height: 95vh;
    width: 100vw;
    /* position: absolute; */
  `

  const Title = css`
    font-size: 224px;
    position: absolute;
    top: 20%;
    left: 10%;
    /* color: rgba(0, 0, 0, 0); */
    color: ${Color.Primary};
    /* -webkit-text-stroke: 2px #fff; */
    font-weight: 700;
    opacity: 0.2;
  `
  const Node = css`
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    & > div {
      overflow: visible !important;
    }
  `
  const NodeItem = css`
    position: relative;
  `

  return (
    <>
      <div className={Container}>
        <h1 className={Title}>ABOUT</h1>
        <div className={Node}>
          {/* <TransformWrapper> */}
          {/* <TransformComponent> */}
          <svg
            className={NodeItem}
            xmlns='http://www.w3.org/2000/svg'
            width='1730'
            height='873'
            viewBox='0 0 1730 873'
          >
            <defs>
              <filter
                id='Tech_Stack'
                x='922.5'
                y='107.5'
                width='63'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Level'
                x='908.5'
                y='132.5'
                width='31'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-2' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-2' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Normal'
                x='912.5'
                y='342.5'
                width='44'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-3' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-3' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522'
                x='911'
                y='162'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-4' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-4' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Order_by_Type'
                x='917.5'
                y='163.5'
                width='81'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-5' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-5' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-2'
                x='911'
                y='187'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-6' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-6' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='NodeJS'
                x='925.5'
                y='188.5'
                width='45'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-7' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-7' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_82'
                x='1000.5'
                y='188.5'
                width='17'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-8' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-8' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-3'
                x='911'
                y='209'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-9' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-9' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='React'
                x='925.5'
                y='210.5'
                width='35'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-10' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-10' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_90'
                x='1000.5'
                y='210.5'
                width='17'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-11' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-11' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-4'
                x='911'
                y='253'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-12' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-12' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='NGINX'
                x='925.5'
                y='254.5'
                width='37'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-13' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-13' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_70'
                x='1001.5'
                y='254.5'
                width='16'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-14' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-14' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-5'
                x='911'
                y='297'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-15' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-15' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='MongoDB'
                x='925.5'
                y='298.5'
                width='56'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-16' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-16' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_62'
                x='1000.5'
                y='298.5'
                width='17'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-17' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-17' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-6'
                x='911'
                y='231'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-18' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-18' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Redis'
                x='925.5'
                y='232.5'
                width='33'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-19' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-19' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_74'
                x='1001.5'
                y='232.5'
                width='16'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-20' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-20' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-7'
                x='911'
                y='275'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-21' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-21' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='GraphQL'
                x='925.5'
                y='276.5'
                width='51'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-22' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-22' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_86'
                x='1000.5'
                y='276.5'
                width='17'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-23' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-23' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-8'
                x='911'
                y='319'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-24' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-24' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='WordPress'
                x='925.5'
                y='320.5'
                width='62'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-25' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-25' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_100'
                x='996.5'
                y='320.5'
                width='21'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-26' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-26' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Language'
                x='905.5'
                y='382.5'
                width='59'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-27' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-27' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Skill'
                x='896.5'
                y='407.5'
                width='24'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-28' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-28' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='HTML'
                x='976.5'
                y='428.5'
                width='31'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-29' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-29' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='CSS_SCSS'
                x='949.5'
                y='449.5'
                width='58'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-30' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-30' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='JavaScript'
                x='945.5'
                y='470.5'
                width='62'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-31' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-31' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='PHP'
                x='983.5'
                y='491.5'
                width='24'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-32' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-32' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Sound_Production'
                x='675.5'
                y='732.5'
                width='101'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-33' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-33' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Skill-2'
                x='666.5'
                y='757.5'
                width='24'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-34' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-34' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Arrangement'
                x='700.5'
                y='778.5'
                width='77'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-35' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-35' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Voice_Over'
                x='714.5'
                y='799.5'
                width='63'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-36' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-36' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Sing_Play'
                x='713.5'
                y='820.5'
                width='64'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-37' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-37' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Mix_Mastering'
                x='687.5'
                y='841.5'
                width='90'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-38' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-38' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Developer'
                x='678.5'
                y='345.5'
                width='59'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-39' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-39' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Tech_Stack-2'
                x='717.5'
                y='391.5'
                width='63'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-40' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-40' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Language-2'
                x='721.5'
                y='409.5'
                width='59'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-41' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-41' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Input'
                x='669.5'
                y='370.5'
                width='32'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-42' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-42' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-9'
                x='667'
                y='430'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-43' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-43' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='UX_UI_Design'
                x='681.5'
                y='431.5'
                width='74'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-44' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-44' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_90-2'
                x='756.5'
                y='431.5'
                width='17'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-45' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-45' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Graphics_Design'
                x='961.5'
                y='537.5'
                width='94'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-46' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-46' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Input-2'
                x='952.5'
                y='562.5'
                width='32'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-47' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-47' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Normal-2'
                x='951.5'
                y='704.5'
                width='44'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-48' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-48' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-10'
                x='950'
                y='592'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-49' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-49' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Branding'
                x='958.5'
                y='593.5'
                width='53'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-50' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-50' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_73'
                x='1040.5'
                y='593.5'
                width='16'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-51' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-51' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-11'
                x='950'
                y='614'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-52' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-52' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Mockup'
                x='958.5'
                y='615.5'
                width='47'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-53' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-53' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_82-2'
                x='1039.5'
                y='615.5'
                width='17'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-54' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-54' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-12'
                x='950'
                y='658'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-55' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-55' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Manipulation'
                x='958.5'
                y='659.5'
                width='76'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-56' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-56' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_100-2'
                x='1035.5'
                y='659.5'
                width='21'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-57' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-57' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-13'
                x='950'
                y='636'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-58' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-58' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Retouch'
                x='958.5'
                y='637.5'
                width='49'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-59' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-59' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_97'
                x='1040.5'
                y='637.5'
                width='16'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-60' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-60' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-14'
                x='950'
                y='680'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-61' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-61' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Presentation'
                x='957.5'
                y='681.5'
                width='73'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-62' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-62' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_88'
                x='1039.5'
                y='681.5'
                width='17'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-63' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-63' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Video_Production'
                x='725.5'
                y='477.5'
                width='97'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-64' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-64' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Input-3'
                x='716.5'
                y='502.5'
                width='32'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-65' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-65' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-15'
                x='714'
                y='532'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-66' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-66' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Motion'
                x='722.5'
                y='533.5'
                width='41'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-67' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-67' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_92'
                x='803.5'
                y='533.5'
                width='17'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-68' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-68' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-16'
                x='714'
                y='554'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-69' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-69' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='VFX_Sim'
                x='722.5'
                y='555.5'
                width='47'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-70' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-70' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_80'
                x='803.5'
                y='555.5'
                width='17'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-71' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-71' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-17'
                x='714'
                y='598'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-72' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-72' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='LookDev'
                x='722.5'
                y='599.5'
                width='49'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-73' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-73' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_76'
                x='804.5'
                y='599.5'
                width='16'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-74' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-74' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-18'
                x='714'
                y='642'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-75' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-75' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Keying'
                x='722.5'
                y='643.5'
                width='40'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-76' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-76' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_80-2'
                x='803.5'
                y='643.5'
                width='17'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-77' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-77' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-19'
                x='714'
                y='576'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-78' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-78' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_3D_Modeling'
                x='722.5'
                y='577.5'
                width='71'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-79' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-79' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_69'
                x='803.5'
                y='577.5'
                width='17'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-80' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-80' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-20'
                x='714'
                y='620'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-81' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-81' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rotoscoping'
                x='721.5'
                y='621.5'
                width='72'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-82' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-82' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_83'
                x='803.5'
                y='621.5'
                width='17'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-83' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-83' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-21'
                x='714'
                y='664'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-84' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-84' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Composition'
                x='721.5'
                y='665.5'
                width='74'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-85' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-85' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_88-2'
                x='803.5'
                y='665.5'
                width='17'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-86' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-86' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-22'
                x='714'
                y='686'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-87' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-87' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Editing'
                x='721.5'
                y='687.5'
                width='40'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-88' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-88' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_100-3'
                x='799.5'
                y='687.5'
                width='21'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-89' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-89' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Hard_Skills'
                x='445.5'
                y='345.5'
                width='59'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-90' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-90' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Data'
                x='436.5'
                y='370.5'
                width='30'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-91' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-91' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-23'
                x='435'
                y='413'
                width='121'
                height='41'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-92' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-92' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Developer:'
                x='437.5'
                y='394.5'
                width='62'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-93' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-93' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Exp.'
                x='445.5'
                y='414.5'
                width='24'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-94' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-94' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Spending'
                x='445.5'
                y='433.5'
                width='56'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-95' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-95' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_2_years'
                x='504.5'
                y='414.5'
                width='43'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-96' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-96' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_10_'
                x='525.5'
                y='433.5'
                width='22'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-97' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-97' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-24'
                x='435'
                y='474'
                width='121'
                height='41'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-98' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-98' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Graphics_Design:'
                x='437.5'
                y='455.5'
                width='96'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-99' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-99' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Exp.-2'
                x='445.5'
                y='475.5'
                width='24'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-100' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-100' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Spending-2'
                x='445.5'
                y='494.5'
                width='56'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-101' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-101' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_4_years'
                x='503.5'
                y='475.5'
                width='44'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-102' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-102' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_30_'
                x='522.5'
                y='494.5'
                width='25'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-103' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-103' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-25'
                x='435'
                y='535'
                width='121'
                height='41'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-104' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-104' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Video_Production:'
                x='437.5'
                y='516.5'
                width='100'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-105' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-105' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Exp.-3'
                x='445.5'
                y='536.5'
                width='24'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-106' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-106' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Spending-3'
                x='445.5'
                y='555.5'
                width='56'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-107' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-107' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_3_years'
                x='504.5'
                y='536.5'
                width='43'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-108' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-108' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_25_'
                x='522.5'
                y='555.5'
                width='25'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-109' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-109' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-26'
                x='435'
                y='596'
                width='121'
                height='41'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-110' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-110' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Sound_Production:'
                x='437.5'
                y='577.5'
                width='103'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-111' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-111' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Exp.-4'
                x='445.5'
                y='597.5'
                width='24'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-112' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-112' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Spending-4'
                x='445.5'
                y='616.5'
                width='56'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-113' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-113' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_2_years-2'
                x='504.5'
                y='597.5'
                width='43'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-114' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-114' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_55_'
                x='521.5'
                y='616.5'
                width='26'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-115' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-115' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Range'
                x='436.5'
                y='640.5'
                width='39'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-116' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-116' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Map'
                x='436.5'
                y='661.5'
                width='28'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-117' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-117' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='ColorRamp'
                x='106.5'
                y='684.5'
                width='66'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-118' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-118' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Color'
                x='277.5'
                y='709.5'
                width='33'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-119' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-119' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Alpha'
                x='274.5'
                y='731.5'
                width='36'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-120' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-120' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-27'
                x='253'
                y='764'
                width='64'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-121' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-121' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Linear'
                x='259.5'
                y='765.5'
                width='36'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-122' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-122' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-28'
                x='189'
                y='764'
                width='63'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-123' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-123' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='PPF'
                x='195.5'
                y='765.5'
                width='22'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-124' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-124' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-29'
                x='95'
                y='844'
                width='222'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-125' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-125' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Fac'
                x='101.5'
                y='845.5'
                width='23'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-126' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-126' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_0.500'
                x='276.5'
                y='845.5'
                width='33'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-127' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-127' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-30'
                x='168'
                y='820'
                width='148'
                height='20'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-128' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-128' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Exp.-5'
                x='181.5'
                y='820.5'
                width='24'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-129' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-129' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_0.000'
                x='275.5'
                y='820.5'
                width='33'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-130' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-130' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-31'
                x='95'
                y='820'
                width='63'
                height='20'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-131' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-131' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_0'
                x='121.5'
                y='820.5'
                width='10'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-132' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-132' />
                <feComposite in='SourceGraphic' />
              </filter>
              <linearGradient
                id='linear-gradient'
                x1='0.988'
                y1='1'
                x2='0.016'
                y2='1'
                gradientUnits='objectBoundingBox'
              >
                <stop offset='0' stopColor='#fff' />
                <stop offset='1' stopColor='#2d2d2d' />
              </linearGradient>
              <filter
                id='Rectangle_17527'
                x='100'
                y='788'
                width='212'
                height='22'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-133' />
                <feFlood floodColor='#6f6f6f' />
                <feComposite operator='in' in2='blur-133' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Output'
                x='1016.5'
                y='761.5'
                width='42'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-134' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-134' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Color-2'
                x='1085.5'
                y='786.5'
                width='33'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-135' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-135' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Input-4'
                x='1007.5'
                y='808.5'
                width='32'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-136' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-136' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-32'
                x='1005'
                y='838'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-137' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-137' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='YouTube_CH'
                x='1019.5'
                y='839.5'
                width='70'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-138' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-138' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Soft_Skills'
                x='1141.5'
                y='324.5'
                width='54'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-139' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-139' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Data-2'
                x='1128.5'
                y='349.5'
                width='30'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-140' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-140' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Normal-3'
                x='1131.5'
                y='559.5'
                width='44'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-141' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-141' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-33'
                x='1130'
                y='379'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-142' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-142' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Lists'
                x='1136.5'
                y='380.5'
                width='26'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-143' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-143' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-34'
                x='1130'
                y='404'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-144' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-144' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Communication'
                x='1144.5'
                y='405.5'
                width='93'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-145' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-145' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-35'
                x='1130'
                y='426'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-146' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-146' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Critical_Thinking'
                x='1144.5'
                y='427.5'
                width='91'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-147' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-147' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-36'
                x='1130'
                y='470'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-148' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-148' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Positive_Attitude'
                x='1144.5'
                y='471.5'
                width='91'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-149' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-149' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-37'
                x='1130'
                y='514'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-150' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-150' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Work_Ethic'
                x='1144.5'
                y='515.5'
                width='60'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-151' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-151' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-38'
                x='1130'
                y='448'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-152' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-152' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Leadership'
                x='1144.5'
                y='449.5'
                width='64'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-153' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-153' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-39'
                x='1130'
                y='492'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-154' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-154' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Teamwork'
                x='1144.5'
                y='493.5'
                width='61'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-155' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-155' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='More'
                x='1212.5'
                y='540.5'
                width='31'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-156' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-156' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Work_Ethic-2'
                x='1605.5'
                y='615.5'
                width='60'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-157' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-157' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Skill-3'
                x='1596.5'
                y='640.5'
                width='24'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-158' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-158' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Attentiveness'
                x='1629.5'
                y='661.5'
                width='78'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-159' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-159' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Independence'
                x='1623.5'
                y='682.5'
                width='84'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-160' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-160' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Multitasking'
                x='1638.5'
                y='703.5'
                width='69'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-161' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-161' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Organization'
                x='1633.5'
                y='724.5'
                width='74'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-162' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-162' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Planning'
                x='1656.5'
                y='745.5'
                width='51'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-163' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-163' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Teamwork-2'
                x='1401.5'
                y='443.5'
                width='61'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-164' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-164' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Skill-4'
                x='1392.5'
                y='468.5'
                width='24'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-165' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-165' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Accepting_feedback'
                x='1388.5'
                y='489.5'
                width='115'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-166' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-166' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Collaboration'
                x='1424.5'
                y='510.5'
                width='79'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-167' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-167' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Empathy'
                x='1450.5'
                y='531.5'
                width='53'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-168' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-168' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Influence'
                x='1449.5'
                y='552.5'
                width='54'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-169' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-169' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Self-awareness'
                x='1414.5'
                y='573.5'
                width='89'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-170' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-170' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='More-2'
                x='1374.5'
                y='630.5'
                width='31'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-171' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-171' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Skill-5'
                x='1365.5'
                y='655.5'
                width='24'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-172' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-172' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Good_attitude'
                x='1396.5'
                y='676.5'
                width='80'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-173' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-173' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Positive_work_ethic'
                x='1372.5'
                y='697.5'
                width='104'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-174' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-174' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Training'
                x='1428.5'
                y='718.5'
                width='48'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-175' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-175' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Others'
                x='1436.5'
                y='739.5'
                width='40'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-176' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-176' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Communication-2'
                x='1517.5'
                y='120.5'
                width='93'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-177' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-177' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Skill-6'
                x='1508.5'
                y='145.5'
                width='24'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-178' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-178' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Listening'
                x='1567.5'
                y='166.5'
                width='52'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-179' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-179' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Presentation-2'
                x='1546.5'
                y='187.5'
                width='73'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-180' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-180' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Storytelling'
                x='1554.5'
                y='208.5'
                width='65'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-181' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-181' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Positive_Attitude-2'
                x='1602.5'
                y='400.5'
                width='91'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-182' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-182' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Skill-7'
                x='1593.5'
                y='425.5'
                width='24'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-183' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-183' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Confidence'
                x='1637.5'
                y='446.5'
                width='67'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-184' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-184' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Energy'
                x='1663.5'
                y='467.5'
                width='41'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-185' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-185' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Friendliness'
                x='1636.5'
                y='488.5'
                width='68'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-186' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-186' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Respectability'
                x='1623.5'
                y='509.5'
                width='81'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-187' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-187' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Leadership-2'
                x='1592.5'
                y='247.5'
                width='64'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-188' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-188' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Skill-8'
                x='1583.5'
                y='272.5'
                width='24'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-189' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-189' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Giving_feedback'
                x='1601.5'
                y='293.5'
                width='93'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-190' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-190' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Inspiring_people'
                x='1602.5'
                y='314.5'
                width='92'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-191' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-191' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Management'
                x='1616.5'
                y='335.5'
                width='78'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-192' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-192' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Motivating'
                x='1632.5'
                y='356.5'
                width='62'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-193' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-193' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Critical_Thinking-2'
                x='1387.5'
                y='251.5'
                width='91'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-194' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-194' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Skill-9'
                x='1378.5'
                y='276.5'
                width='24'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-195' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-195' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Creativity'
                x='1433.5'
                y='297.5'
                width='56'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-196' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-196' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Design_aptitude'
                x='1398.5'
                y='318.5'
                width='91'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-197' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-197' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Desire_to_learn'
                x='1407.5'
                y='339.5'
                width='82'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-198' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-198' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Problem_solving'
                x='1398.5'
                y='360.5'
                width='91'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-199' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-199' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Outside_the_box'
                x='1400.5'
                y='381.5'
                width='89'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-200' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-200' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Hobbies'
                x='573.5'
                y='2.5'
                width='48'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-201' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-201' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Person'
                x='564.5'
                y='27.5'
                width='41'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-202' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-202' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Normal-4'
                x='564.5'
                y='237.5'
                width='44'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-203' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-203' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Piano'
                x='641.5'
                y='48.5'
                width='34'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-204' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-204' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Music'
                x='640.5'
                y='69.5'
                width='35'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-205' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-205' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Explore'
                x='632.5'
                y='132.5'
                width='43'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-206' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-206' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Movie'
                x='639.5'
                y='90.5'
                width='36'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-207' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-207' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Travel'
                x='638.5'
                y='153.5'
                width='37'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-208' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-208' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Sing_Play-2'
                x='611.5'
                y='195.5'
                width='64'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-209' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-209' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Design'
                x='634.5'
                y='111.5'
                width='41'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-210' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-210' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Self-Development'
                x='572.5'
                y='174.5'
                width='103'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-211' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-211' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Coffee'
                x='635.5'
                y='216.5'
                width='40'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-212' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-212' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='About_Me'
                x='256.5'
                y='33.5'
                width='56'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-213' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-213' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Export'
                x='321.5'
                y='58.5'
                width='37'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-214' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-214' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Hobbies-2'
                x='310.5'
                y='80.5'
                width='48'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-215' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-215' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-40'
                x='245'
                y='110'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-216' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-216' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Age'
                x='259.5'
                y='111.5'
                width='25'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-217' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-217' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='_24'
                x='334.5'
                y='111.5'
                width='17'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-218' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-218' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Favorite'
                x='247.5'
                y='186.5'
                width='47'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-219' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-219' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17523'
                x='248'
                y='138'
                width='14'
                height='15'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-220' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-220' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17524'
                x='248'
                y='163'
                width='14'
                height='15'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-221' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-221' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Jirayu_Ninlapun'
                x='268.5'
                y='136.5'
                width='89'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-222' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-222' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Jiraa_Ninpn'
                x='268.5'
                y='161.5'
                width='66'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-223' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-223' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Input-5'
                x='247.5'
                y='254.5'
                width='32'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-224' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-224' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Soft_Skills-2'
                x='304.5'
                y='212.5'
                width='54'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-225' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-225' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Hard_Skill'
                x='305.5'
                y='233.5'
                width='53'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-226' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-226' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Person-2'
                x='26.5'
                y='107.5'
                width='41'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-227' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-227' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Output-2'
                x='86.5'
                y='132.5'
                width='42'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-228' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-228' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Database'
                x='17.5'
                y='188.5'
                width='58'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-229' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-229' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Rectangle_17522-41'
                x='15'
                y='162'
                width='121'
                height='21'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur result='blur-230' />
                <feFlood floodColor='#373737' />
                <feComposite operator='in' in2='blur-230' />
                <feComposite in='SourceGraphic' />
              </filter>
              <filter
                id='Jirayu_Ninlapun-2'
                x='21.5'
                y='163.5'
                width='89'
                height='19'
                filterUnits='userSpaceOnUse'
              >
                <feOffset dy='1' />
                <feGaussianBlur stdDeviation='0.5' result='blur-231' />
                <feFlood floodOpacity='0.471' />
                <feComposite operator='in' in2='blur-231' />
                <feComposite in='SourceGraphic' />
              </filter>
            </defs>
            <g id='Node' transform='translate(-123 -158)'>
              <path
                id='Path_3423'
                dataName='Path 3423'
                d='M4489.628,2679.95c49.04,0,3.831,137.352,48.463,137.352'
                transform='translate(-3991 -2280)'
                fill='none'
                stroke='#2f7a56'
                strokeWidth='2'
              />
              <path
                id='Path_3422'
                dataName='Path 3422'
                d='M4489.628,2658.652c98.888,0,468.557,137.866,744.408,137.866'
                transform='translate(-3991 -2280)'
                fill='none'
                stroke='#2f7a56'
                strokeWidth='2'
              />
              <g
                id='Hard_Skills-2'
                dataName='Hard Skills'
                transform='translate(15)'
              >
                <path
                  id='Path_3400'
                  dataName='Path 3400'
                  d='M906.662,575.554c39.564-.673,36.109-2.2,81.061-1.695'
                  fill='none'
                  stroke='#4e88ab'
                  strokeWidth='2'
                />
                <path
                  id='Path_3401'
                  dataName='Path 3401'
                  d='M906.086,557.989c61.317.219,35.87-258.982,101.968-258.545'
                  fill='none'
                  stroke='#4e88ab'
                  strokeWidth='2'
                />
                <path
                  id='Path_3397'
                  dataName='Path 3397'
                  d='M673.444,773.1c63.979-1.423,17.971,150.648,87.965,151.5'
                  fill='none'
                  stroke='#bc3b47'
                  strokeWidth='2'
                />
                <path
                  id='Path_3398'
                  dataName='Path 3398'
                  d='M673.732,651.295c75.812-.8,36.578-52.767,90.573-53.066'
                  fill='none'
                  stroke='#bf7e0b'
                  strokeWidth='2'
                />
                <path
                  id='Path_3399'
                  dataName='Path 3399'
                  d='M673.444,589.962c54.665-1.684,38.613-53.835,90.973-52.993'
                  fill='none'
                  stroke='#4e88ab'
                  strokeWidth='2'
                />
                <path
                  id='Path_3415'
                  dataName='Path 3415'
                  d='M4664.732,2931.295c132.467,0,164.517,77.915,374.075,77.915'
                  transform='translate(-3991 -2280)'
                  fill='none'
                  stroke='#bf7e0b'
                  strokeWidth='2'
                />
                <path
                  id='Path_3414'
                  dataName='Path 3414'
                  d='M4663.868,3053.1c60.193,0,71.13,81.385,139.426,81.385'
                  transform='translate(-3991 -2280)'
                  fill='none'
                  stroke='#bc3b47'
                  strokeWidth='2'
                />
                <path
                  id='Path_3416'
                  dataName='Path 3416'
                  d='M4943.558,3024.3c29.9,0,65.338,37.654,95.243,37.654'
                  transform='translate(-3991 -2280)'
                  fill='none'
                  stroke='#c3871c'
                  strokeWidth='2'
                />
                <path
                  id='Path_3417'
                  dataName='Path 3417'
                  d='M4943.558,3045.342c24.611,0,56.221,16.72,94.8,16.391'
                  transform='translate(-3991 -2280)'
                  fill='none'
                  stroke='#c3871c'
                  strokeWidth='2'
                />
                <path
                  id='Path_3418'
                  dataName='Path 3418'
                  d='M4663.868,2992.43c44.6,0,83.166-43.635,139.082-43.635'
                  transform='translate(-3991 -2280)'
                  fill='none'
                  stroke='#6f5eb2'
                  strokeWidth='2'
                />
                <path
                  id='Path_3419'
                  dataName='Path 3419'
                  d='M4427.964,3155.612c50.433,0,46.768-69.251,94.706-69.251'
                  transform='translate(-3991 -2280)'
                  fill='none'
                  stroke='#2f7a56'
                  strokeWidth='2'
                />
                <path
                  id='Path_3424'
                  dataName='Path 3424'
                  d='M4909.539,3287.719c38.557,0,155.694-32.782,200.014-32.782'
                  transform='translate(-4006 -2280)'
                  fill='none'
                  stroke='#bc3b47'
                  strokeWidth='2'
                />
                <path
                  id='Path_3425'
                  dataName='Path 3425'
                  d='M4908.539,3264.9c38.557,0,155.03-12.183,199.35-12.183'
                  transform='translate(-4005 -2278)'
                  fill='none'
                  stroke='#bc3b47'
                  strokeWidth='2'
                />
                <path
                  id='Path_3426'
                  dataName='Path 3426'
                  d='M4908.313,3230.031c48.51,0,154.869,29.71,199.188,29.71'
                  transform='translate(-4005 -2285)'
                  fill='none'
                  stroke='#bc3b47'
                  strokeWidth='2'
                />
                <g id='Node_TechStack' transform='translate(-5878 -635)'>
                  <g
                    id='Rectangle_17520'
                    dataName='Rectangle 17520'
                    transform='translate(6886 898)'
                    fill='#474747'
                    stroke='#000'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <rect width='143' height='263' rx='5' stroke='none' />
                    <rect
                      x='0.5'
                      y='0.5'
                      width='142'
                      height='262'
                      rx='4.5'
                      fill='none'
                    />
                  </g>
                  <g
                    id='Rectangle_17521'
                    dataName='Rectangle 17521'
                    transform='translate(6887 899)'
                    fill='#4b89af'
                    stroke='#404548'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <path
                      d='M5,0H136a5,5,0,0,1,5,5V20a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V5A5,5,0,0,1,5,0Z'
                      stroke='none'
                    />
                    <path
                      d='M5,.5H136A4.5,4.5,0,0,1,140.5,5V19a.5.5,0,0,1-.5.5H1A.5.5,0,0,1,.5,19V5A4.5,4.5,0,0,1,5,.5Z'
                      fill='none'
                    />
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5986, 793)'
                    filter='url(#Tech_Stack)'
                  >
                    <text
                      id='Tech_Stack-3'
                      dataName='Tech Stack'
                      transform='translate(924 120)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Tech Stack
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5986, 793)'
                    filter='url(#Level)'
                  >
                    <text
                      id='Level-2'
                      dataName='Level'
                      transform='translate(938 145)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-27.269' y='0'>
                        Level
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5986, 793)'
                    filter='url(#Normal)'
                  >
                    <text
                      id='Normal-5'
                      dataName='Normal'
                      transform='translate(955 355)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-40.348' y='0'>
                        Normal
                      </tspan>
                    </text>
                  </g>
                  <path
                    id='Polygon_15'
                    dataName='Polygon 15'
                    d='M4,0,8,7H0Z'
                    transform='translate(6904 913) rotate(180)'
                    fill='#fff'
                  />
                  <g
                    id='Ellipse_149'
                    dataName='Ellipse 149'
                    transform='translate(6882 929)'
                    fill='#426275'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_150'
                    dataName='Ellipse 150'
                    transform='translate(7023 985)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_151'
                    dataName='Ellipse 151'
                    transform='translate(7023 1007)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_165'
                    dataName='Ellipse 165'
                    transform='translate(7023 1051)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_167'
                    dataName='Ellipse 167'
                    transform='translate(7023 1095)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_152'
                    dataName='Ellipse 152'
                    transform='translate(7023 1029)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_164'
                    dataName='Ellipse 164'
                    transform='translate(7023 1073)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_166'
                    dataName='Ellipse 166'
                    transform='translate(7023 1117)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_162'
                    dataName='Ellipse 162'
                    transform='translate(6989 1117)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_161'
                    dataName='Ellipse 161'
                    transform='translate(6882 1139)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Group_3461'
                    dataName='Group 3461'
                    transform='translate(-341)'
                  >
                    <g
                      transform='matrix(1, 0, 0, 1, 6327, 793)'
                      filter='url(#Rectangle_17522)'
                    >
                      <g
                        id='Rectangle_17522-42'
                        dataName='Rectangle 17522'
                        transform='translate(911 162)'
                        fill='#2c2c2c'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6327, 793)'
                      filter='url(#Order_by_Type)'
                    >
                      <text
                        id='Order_by_Type-2'
                        dataName='Order by Type'
                        transform='translate(919 176)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Order by Type
                        </tspan>
                      </text>
                    </g>
                    <path
                      id='Path_3402'
                      dataName='Path 3402'
                      d='M226.159,149.1l-3.289-3.289,3.289-3.289'
                      transform='translate(7206.294 1190.099) rotate(-90)'
                      fill='none'
                      stroke='#a3a3a3'
                      strokeMiterlimit='10'
                      strokeWidth='1'
                    />
                  </g>
                  <g
                    id='NodeJS-2'
                    dataName='NodeJS'
                    transform='translate(-341 25)'
                  >
                    <g
                      transform='matrix(1, 0, 0, 1, 6327, 768)'
                      filter='url(#Rectangle_17522-2)'
                    >
                      <g
                        id='Rectangle_17522-43'
                        dataName='Rectangle 17522'
                        transform='translate(911 187)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <path
                      id='Level-3'
                      dataName='Level'
                      d='M2,0H96a0,0,0,0,1,0,0V18a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z'
                      transform='translate(7239 956)'
                      fill='#446c84'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6327, 768)'
                      filter='url(#NodeJS)'
                    >
                      <text
                        id='NodeJS-3'
                        dataName='NodeJS'
                        transform='translate(927 201)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          NodeJS
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6327, 768)'
                      filter='url(#_82)'
                    >
                      <text
                        id='_82-3'
                        dataName='82'
                        transform='translate(1016 201)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-13.266' y='0'>
                          82
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g
                    id='React-2'
                    dataName='React'
                    transform='translate(-341 47)'
                  >
                    <g
                      transform='matrix(1, 0, 0, 1, 6327, 746)'
                      filter='url(#Rectangle_17522-3)'
                    >
                      <g
                        id='Rectangle_17522-44'
                        dataName='Rectangle 17522'
                        transform='translate(911 209)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <path
                      id='Level-4'
                      dataName='Level'
                      d='M2,0H107a0,0,0,0,1,0,0V18a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z'
                      transform='translate(7239 956)'
                      fill='#446c84'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6327, 746)'
                      filter='url(#React)'
                    >
                      <text
                        id='React-3'
                        dataName='React'
                        transform='translate(927 223)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          React
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6327, 746)'
                      filter='url(#_90)'
                    >
                      <text
                        id='_90-3'
                        dataName='90'
                        transform='translate(1016 223)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-13.838' y='0'>
                          90
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g
                    id='NGINX-2'
                    dataName='NGINX'
                    transform='translate(-341 91)'
                  >
                    <g
                      transform='matrix(1, 0, 0, 1, 6327, 702)'
                      filter='url(#Rectangle_17522-4)'
                    >
                      <g
                        id='Rectangle_17522-45'
                        dataName='Rectangle 17522'
                        transform='translate(911 253)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <path
                      id='Level-5'
                      dataName='Level'
                      d='M2,0H82a0,0,0,0,1,0,0V18a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z'
                      transform='translate(7239 956)'
                      fill='#446c84'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6327, 702)'
                      filter='url(#NGINX)'
                    >
                      <text
                        id='NGINX-3'
                        dataName='NGINX'
                        transform='translate(927 267)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          NGINX
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6327, 702)'
                      filter='url(#_70)'
                    >
                      <text
                        id='_70-2'
                        dataName='70'
                        transform='translate(1016 267)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-12.914' y='0'>
                          70
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g
                    id='MongoDB-2'
                    dataName='MongoDB'
                    transform='translate(-341 135)'
                  >
                    <g
                      transform='matrix(1, 0, 0, 1, 6327, 658)'
                      filter='url(#Rectangle_17522-5)'
                    >
                      <g
                        id='Rectangle_17522-46'
                        dataName='Rectangle 17522'
                        transform='translate(911 297)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <path
                      id='Level-6'
                      dataName='Level'
                      d='M2,0H72a0,0,0,0,1,0,0V18a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z'
                      transform='translate(7239 956)'
                      fill='#446c84'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6327, 658)'
                      filter='url(#MongoDB)'
                    >
                      <text
                        id='MongoDB-3'
                        dataName='MongoDB'
                        transform='translate(927 311)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          MongoDB
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6327, 658)'
                      filter='url(#_62)'
                    >
                      <text
                        id='_62-2'
                        dataName='62'
                        transform='translate(1016 311)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-13.31' y='0'>
                          62
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g
                    id='Redis-2'
                    dataName='Redis'
                    transform='translate(-341 69)'
                  >
                    <g
                      transform='matrix(1, 0, 0, 1, 6327, 724)'
                      filter='url(#Rectangle_17522-6)'
                    >
                      <g
                        id='Rectangle_17522-47'
                        dataName='Rectangle 17522'
                        transform='translate(911 231)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <path
                      id='Level-7'
                      dataName='Level'
                      d='M2,0H86a0,0,0,0,1,0,0V18a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z'
                      transform='translate(7239 956)'
                      fill='#446c84'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6327, 724)'
                      filter='url(#Redis)'
                    >
                      <text
                        id='Redis-3'
                        dataName='Redis'
                        transform='translate(927 245)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Redis
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6327, 724)'
                      filter='url(#_74)'
                    >
                      <text
                        id='_74-2'
                        dataName='74'
                        transform='translate(1016 245)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-12.925' y='0'>
                          74
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g
                    id='GraphQL-2'
                    dataName='GraphQL'
                    transform='translate(-341 113)'
                  >
                    <g
                      transform='matrix(1, 0, 0, 1, 6327, 680)'
                      filter='url(#Rectangle_17522-7)'
                    >
                      <g
                        id='Rectangle_17522-48'
                        dataName='Rectangle 17522'
                        transform='translate(911 275)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <path
                      id='Level-8'
                      dataName='Level'
                      d='M2,0h98a0,0,0,0,1,0,0V18a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z'
                      transform='translate(7239 956)'
                      fill='#446c84'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6327, 680)'
                      filter='url(#GraphQL)'
                    >
                      <text
                        id='GraphQL-3'
                        dataName='GraphQL'
                        transform='translate(927 289)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          GraphQL
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6327, 680)'
                      filter='url(#_86)'
                    >
                      <text
                        id='_86-2'
                        dataName='86'
                        transform='translate(1016 289)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-13.926' y='0'>
                          86
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g id='WP' transform='translate(-341 157)'>
                    <g
                      transform='matrix(1, 0, 0, 1, 6327, 636)'
                      filter='url(#Rectangle_17522-8)'
                    >
                      <g
                        id='Rectangle_17522-49'
                        dataName='Rectangle 17522'
                        transform='translate(911 319)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <rect
                      id='Level-9'
                      dataName='Level'
                      width='119'
                      height='18'
                      rx='2'
                      transform='translate(7239 956)'
                      fill='#446c84'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6327, 636)'
                      filter='url(#WordPress)'
                    >
                      <text
                        id='WordPress-2'
                        dataName='WordPress'
                        transform='translate(927 333)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          WordPress
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6327, 636)'
                      filter='url(#_100)'
                    >
                      <text
                        id='_100-4'
                        dataName='100'
                        transform='translate(1016 333)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-17.336' y='0'>
                          100
                        </tspan>
                      </text>
                    </g>
                  </g>
                </g>
                <g id='Node_Language' transform='translate(-5895 -360)'>
                  <g
                    id='Rectangle_17520-2'
                    dataName='Rectangle 17520'
                    transform='translate(6886 898)'
                    fill='#474747'
                    stroke='#000'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <rect width='143' height='137' rx='5' stroke='none' />
                    <rect
                      x='0.5'
                      y='0.5'
                      width='142'
                      height='136'
                      rx='4.5'
                      fill='none'
                    />
                  </g>
                  <g
                    id='Rectangle_17521-2'
                    dataName='Rectangle 17521'
                    transform='translate(6887 899)'
                    fill='#4b89af'
                    stroke='#404548'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <path
                      d='M5,0H136a5,5,0,0,1,5,5V20a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V5A5,5,0,0,1,5,0Z'
                      stroke='none'
                    />
                    <path
                      d='M5,.5H136A4.5,4.5,0,0,1,140.5,5V19a.5.5,0,0,1-.5.5H1A.5.5,0,0,1,.5,19V5A4.5,4.5,0,0,1,5,.5Z'
                      fill='none'
                    />
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6003, 518)'
                    filter='url(#Language)'
                  >
                    <text
                      id='Language-3'
                      dataName='Language'
                      transform='translate(907 395)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Language
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6003, 518)'
                    filter='url(#Skill)'
                  >
                    <text
                      id='Skill-10'
                      dataName='Skill'
                      transform='translate(898 420)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Skill
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6003, 518)'
                    filter='url(#HTML)'
                  >
                    <text
                      id='HTML-2'
                      dataName='HTML'
                      transform='translate(1006 441)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-27.786' y='0'>
                        HTML
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6003, 518)'
                    filter='url(#CSS_SCSS)'
                  >
                    <text
                      id='CSS_SCSS-2'
                      dataName='CSS/SCSS'
                      transform='translate(1006 462)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-54.505' y='0'>
                        CSS/SCSS
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6003, 518)'
                    filter='url(#JavaScript)'
                  >
                    <text
                      id='JavaScript-2'
                      dataName='JavaScript'
                      transform='translate(1006 483)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-58.256' y='0'>
                        JavaScript
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6003, 518)'
                    filter='url(#PHP)'
                  >
                    <text
                      id='PHP-2'
                      dataName='PHP'
                      transform='translate(1006 504)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-20.35' y='0'>
                        PHP
                      </tspan>
                    </text>
                  </g>
                  <path
                    id='Polygon_15-2'
                    dataName='Polygon 15'
                    d='M4,0,8,7H0Z'
                    transform='translate(6904 913) rotate(180)'
                    fill='#fff'
                  />
                  <g
                    id='Ellipse_149-2'
                    dataName='Ellipse 149'
                    transform='translate(6882 929)'
                    fill='#426275'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_153'
                    dataName='Ellipse 153'
                    transform='translate(7023 950)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_168'
                    dataName='Ellipse 168'
                    transform='translate(7023 971)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_169'
                    dataName='Ellipse 169'
                    transform='translate(7023 992)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_170'
                    dataName='Ellipse 170'
                    transform='translate(7023 1013)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                </g>
                <g id='Node_Sound' transform='translate(-6125 -10)'>
                  <g
                    id='Rectangle_17520-3'
                    dataName='Rectangle 17520'
                    transform='translate(6886 898)'
                    fill='#474747'
                    stroke='#000'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <rect width='143' height='137' rx='5' stroke='none' />
                    <rect
                      x='0.5'
                      y='0.5'
                      width='142'
                      height='136'
                      rx='4.5'
                      fill='none'
                    />
                  </g>
                  <g
                    id='Rectangle_17521-3'
                    dataName='Rectangle 17521'
                    transform='translate(6887 899)'
                    fill='#8b363e'
                    stroke='#7d383e'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <path
                      d='M5,0H136a5,5,0,0,1,5,5V20a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V5A5,5,0,0,1,5,0Z'
                      stroke='none'
                    />
                    <path
                      d='M5,.5H136A4.5,4.5,0,0,1,140.5,5V19a.5.5,0,0,1-.5.5H1A.5.5,0,0,1,.5,19V5A4.5,4.5,0,0,1,5,.5Z'
                      fill='none'
                    />
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6233, 168)'
                    filter='url(#Sound_Production)'
                  >
                    <text
                      id='Sound_Production-2'
                      dataName='Sound Production'
                      transform='translate(677 745)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Sound Production
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6233, 168)'
                    filter='url(#Skill-2)'
                  >
                    <text
                      id='Skill-11'
                      dataName='Skill'
                      transform='translate(668 770)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Skill
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6233, 168)'
                    filter='url(#Arrangement)'
                  >
                    <text
                      id='Arrangement-2'
                      dataName='Arrangement'
                      transform='translate(776 791)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-73.546' y='0'>
                        Arrangement
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6233, 168)'
                    filter='url(#Voice_Over)'
                  >
                    <text
                      id='Voice_Over-2'
                      dataName='Voice Over'
                      transform='translate(776 812)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-59.356' y='0'>
                        Voice Over
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6233, 168)'
                    filter='url(#Sing_Play)'
                  >
                    <text
                      id='Sing_Play-3'
                      dataName='Sing &amp; Play'
                      transform='translate(776 833)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-60.346' y='0'>
                        Sing &amp; Play
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6233, 168)'
                    filter='url(#Mix_Mastering)'
                  >
                    <text
                      id='Mix_Mastering-2'
                      dataName='Mix &amp; Mastering'
                      transform='translate(776 854)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-86.207' y='0'>
                        Mix &amp; Mastering
                      </tspan>
                    </text>
                  </g>
                  <path
                    id='Polygon_15-3'
                    dataName='Polygon 15'
                    d='M4,0,8,7H0Z'
                    transform='translate(6904 913) rotate(180)'
                    fill='#fff'
                  />
                  <g
                    id='Ellipse_149-3'
                    dataName='Ellipse 149'
                    transform='translate(6882 929)'
                    fill='#8b363e'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_153-2'
                    dataName='Ellipse 153'
                    transform='translate(7023 950)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_168-2'
                    dataName='Ellipse 168'
                    transform='translate(7023 971)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_169-2'
                    dataName='Ellipse 169'
                    transform='translate(7023 992)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_170-2'
                    dataName='Ellipse 170'
                    transform='translate(7023 1013)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                </g>
                <g id='Node_Developer' transform='translate(-6122 -397)'>
                  <g
                    id='Rectangle_17520-4'
                    dataName='Rectangle 17520'
                    transform='translate(6886 898)'
                    fill='#474747'
                    stroke='#000'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <rect width='143' height='116' rx='5' stroke='none' />
                    <rect
                      x='0.5'
                      y='0.5'
                      width='142'
                      height='115'
                      rx='4.5'
                      fill='none'
                    />
                  </g>
                  <g
                    id='Rectangle_17521-4'
                    dataName='Rectangle 17521'
                    transform='translate(6887 899)'
                    fill='#4b89af'
                    stroke='#404548'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <path
                      d='M5,0H136a5,5,0,0,1,5,5V20a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V5A5,5,0,0,1,5,0Z'
                      stroke='none'
                    />
                    <path
                      d='M5,.5H136A4.5,4.5,0,0,1,140.5,5V19a.5.5,0,0,1-.5.5H1A.5.5,0,0,1,.5,19V5A4.5,4.5,0,0,1,5,.5Z'
                      fill='none'
                    />
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6230, 555)'
                    filter='url(#Developer)'
                  >
                    <text
                      id='Developer-2'
                      dataName='Developer'
                      transform='translate(680 358)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Developer
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6230, 555)'
                    filter='url(#Tech_Stack-2)'
                  >
                    <text
                      id='Tech_Stack-4'
                      dataName='Tech Stack'
                      transform='translate(779 404)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-59.664' y='0'>
                        Tech Stack
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6230, 555)'
                    filter='url(#Language-2)'
                  >
                    <text
                      id='Language-4'
                      dataName='Language'
                      transform='translate(779 422)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-55.396' y='0'>
                        Language
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6230, 555)'
                    filter='url(#Input)'
                  >
                    <text
                      id='Input-6'
                      dataName='Input'
                      transform='translate(671 383)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Input
                      </tspan>
                    </text>
                  </g>
                  <path
                    id='Polygon_15-4'
                    dataName='Polygon 15'
                    d='M4,0,8,7H0Z'
                    transform='translate(6904 913) rotate(180)'
                    fill='#fff'
                  />
                  <g
                    id='Ellipse_149-4'
                    dataName='Ellipse 149'
                    transform='translate(7023 950)'
                    fill='#426275'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_171'
                    dataName='Ellipse 171'
                    transform='translate(7023 968)'
                    fill='#426275'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_172'
                    dataName='Ellipse 172'
                    transform='translate(6882 990)'
                    fill='#ffa80e'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_153-3'
                    dataName='Ellipse 153'
                    transform='translate(6882 929)'
                    fill='#426275'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Group_3481'
                    dataName='Group 3481'
                    transform='translate(-341 30)'
                  >
                    <g
                      transform='matrix(1, 0, 0, 1, 6571, 525)'
                      filter='url(#Rectangle_17522-9)'
                    >
                      <g
                        id='Rectangle_17522-50'
                        dataName='Rectangle 17522'
                        transform='translate(667 430)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <path
                      id='Level-10'
                      dataName='Level'
                      d='M2,0H107a0,0,0,0,1,0,0V18a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z'
                      transform='translate(7239 956)'
                      fill='#bf7e0b'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6571, 525)'
                      filter='url(#UX_UI_Design)'
                    >
                      <text
                        id='UX_UI_Design-2'
                        dataName='UX/UI Design'
                        transform='translate(683 444)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          UX/UI Design
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6571, 525)'
                      filter='url(#_90-2)'
                    >
                      <text
                        id='_90-4'
                        dataName='90'
                        transform='translate(772 444)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-13.838' y='0'>
                          90
                        </tspan>
                      </text>
                    </g>
                  </g>
                </g>
                <g
                  id='Node_Graphics_Design'
                  dataName='Node_Graphics Design'
                  transform='translate(-5839 -205)'
                >
                  <g
                    id='Rectangle_17520-5'
                    dataName='Rectangle 17520'
                    transform='translate(6886 898)'
                    fill='#474747'
                    stroke='#000'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <rect width='143' height='195' rx='5' stroke='none' />
                    <rect
                      x='0.5'
                      y='0.5'
                      width='142'
                      height='194'
                      rx='4.5'
                      fill='none'
                    />
                  </g>
                  <g
                    id='Rectangle_17521-5'
                    dataName='Rectangle 17521'
                    transform='translate(6887 899)'
                    fill='#9e6034'
                    stroke='#945a31'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <path
                      d='M5,0H136a5,5,0,0,1,5,5V20a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V5A5,5,0,0,1,5,0Z'
                      stroke='none'
                    />
                    <path
                      d='M5,.5H136A4.5,4.5,0,0,1,140.5,5V19a.5.5,0,0,1-.5.5H1A.5.5,0,0,1,.5,19V5A4.5,4.5,0,0,1,5,.5Z'
                      fill='none'
                    />
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5947, 363)'
                    filter='url(#Graphics_Design)'
                  >
                    <text
                      id='Graphics_Design-2'
                      dataName='Graphics Design'
                      transform='translate(963 550)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Graphics Design
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5947, 363)'
                    filter='url(#Input-2)'
                  >
                    <text
                      id='Input-7'
                      dataName='Input'
                      transform='translate(954 575)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Input
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5947, 363)'
                    filter='url(#Normal-2)'
                  >
                    <text
                      id='Normal-6'
                      dataName='Normal'
                      transform='translate(994 717)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-40.348' y='0'>
                        Normal
                      </tspan>
                    </text>
                  </g>
                  <path
                    id='Polygon_15-5'
                    dataName='Polygon 15'
                    d='M4,0,8,7H0Z'
                    transform='translate(6904 913) rotate(180)'
                    fill='#fff'
                  />
                  <g
                    id='Ellipse_149-5'
                    dataName='Ellipse 149'
                    transform='translate(6882 929)'
                    fill='#ffa80e'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_150-2'
                    dataName='Ellipse 150'
                    transform='translate(6882 960)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_151-2'
                    dataName='Ellipse 151'
                    transform='translate(6882 982)'
                    fill='#ffa80e'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_173'
                    dataName='Ellipse 173'
                    transform='translate(6882 1026)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_152-2'
                    dataName='Ellipse 152'
                    transform='translate(6882 1004)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_174'
                    dataName='Ellipse 174'
                    transform='translate(6882 1048)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_153-4'
                    dataName='Ellipse 153'
                    transform='translate(6882 1071)'
                    fill='#6363c7'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Branding-2'
                    dataName='Branding'
                    transform='translate(-341)'
                  >
                    <g
                      transform='matrix(1, 0, 0, 1, 6288, 363)'
                      filter='url(#Rectangle_17522-10)'
                    >
                      <g
                        id='Rectangle_17522-51'
                        dataName='Rectangle 17522'
                        transform='translate(950 592)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <path
                      id='Level-11'
                      dataName='Level'
                      d='M2,0H85a0,0,0,0,1,0,0V18a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z'
                      transform='translate(7239 956)'
                      fill='#bf7e0b'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6288, 363)'
                      filter='url(#Branding)'
                    >
                      <text
                        id='Branding-3'
                        dataName='Branding'
                        transform='translate(960 606)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Branding
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6288, 363)'
                      filter='url(#_73)'
                    >
                      <text
                        id='_73-2'
                        dataName='73'
                        transform='translate(1055 606)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-12.485' y='0'>
                          73
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g
                    id='Mockup-2'
                    dataName='Mockup'
                    transform='translate(-341 22)'
                  >
                    <g
                      transform='matrix(1, 0, 0, 1, 6288, 341)'
                      filter='url(#Rectangle_17522-11)'
                    >
                      <g
                        id='Rectangle_17522-52'
                        dataName='Rectangle 17522'
                        transform='translate(950 614)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <path
                      id='Level-12'
                      dataName='Level'
                      d='M2,0H96a0,0,0,0,1,0,0V18a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z'
                      transform='translate(7239 956)'
                      fill='#bf7e0b'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6288, 341)'
                      filter='url(#Mockup)'
                    >
                      <text
                        id='Mockup-3'
                        dataName='Mockup'
                        transform='translate(960 628)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Mockup
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6288, 341)'
                      filter='url(#_82-2)'
                    >
                      <text
                        id='_82-4'
                        dataName='82'
                        transform='translate(1055 628)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-13.266' y='0'>
                          82
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g id='Mani' transform='translate(-341 66)'>
                    <g
                      transform='matrix(1, 0, 0, 1, 6288, 297)'
                      filter='url(#Rectangle_17522-12)'
                    >
                      <g
                        id='Rectangle_17522-53'
                        dataName='Rectangle 17522'
                        transform='translate(950 658)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <rect
                      id='Level-13'
                      dataName='Level'
                      width='119'
                      height='18'
                      rx='2'
                      transform='translate(7239 956)'
                      fill='#bf7e0b'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6288, 297)'
                      filter='url(#Manipulation)'
                    >
                      <text
                        id='Manipulation-2'
                        dataName='Manipulation'
                        transform='translate(960 672)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Manipulation
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6288, 297)'
                      filter='url(#_100-2)'
                    >
                      <text
                        id='_100-5'
                        dataName='100'
                        transform='translate(1055 672)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-17.336' y='0'>
                          100
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g
                    id='Retouch-2'
                    dataName='Retouch'
                    transform='translate(-341 44)'
                  >
                    <g
                      transform='matrix(1, 0, 0, 1, 6288, 319)'
                      filter='url(#Rectangle_17522-13)'
                    >
                      <g
                        id='Rectangle_17522-54'
                        dataName='Rectangle 17522'
                        transform='translate(950 636)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <path
                      id='Level-14'
                      dataName='Level'
                      d='M2,0H113a0,0,0,0,1,0,0V18a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z'
                      transform='translate(7239 956)'
                      fill='#bf7e0b'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6288, 319)'
                      filter='url(#Retouch)'
                    >
                      <text
                        id='Retouch-3'
                        dataName='Retouch'
                        transform='translate(960 650)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Retouch
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6288, 319)'
                      filter='url(#_97)'
                    >
                      <text
                        id='_97-2'
                        dataName='97'
                        transform='translate(1055 650)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-12.936' y='0'>
                          97
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g id='Present' transform='translate(-341 88)'>
                    <g
                      transform='matrix(1, 0, 0, 1, 6288, 275)'
                      filter='url(#Rectangle_17522-14)'
                    >
                      <g
                        id='Rectangle_17522-55'
                        dataName='Rectangle 17522'
                        transform='translate(950 680)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <path
                      id='Level-15'
                      dataName='Level'
                      d='M2,0H103a0,0,0,0,1,0,0V18a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z'
                      transform='translate(7239 956)'
                      fill='#bf7e0b'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6288, 275)'
                      filter='url(#Presentation)'
                    >
                      <text
                        id='Presentation-3'
                        dataName='Presentation'
                        transform='translate(959 694)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Presentation
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6288, 275)'
                      filter='url(#_88)'
                    >
                      <text
                        id='_88-3'
                        dataName='88'
                        transform='translate(1055 694)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-13.882' y='0'>
                          88
                        </tspan>
                      </text>
                    </g>
                  </g>
                </g>
                <g
                  id='Node_Video_Production'
                  dataName='Node_Video Production'
                  transform='translate(-6075 -265)'
                >
                  <g
                    id='Rectangle_17520-6'
                    dataName='Rectangle 17520'
                    transform='translate(6886 898)'
                    fill='#474747'
                    stroke='#000'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <rect width='143' height='240' rx='5' stroke='none' />
                    <rect
                      x='0.5'
                      y='0.5'
                      width='142'
                      height='239'
                      rx='4.5'
                      fill='none'
                    />
                  </g>
                  <g
                    id='Rectangle_17521-6'
                    dataName='Rectangle 17521'
                    transform='translate(6887 899)'
                    fill='#6f5eb2'
                    stroke='#645599'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <path
                      d='M5,0H136a5,5,0,0,1,5,5V20a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V5A5,5,0,0,1,5,0Z'
                      stroke='none'
                    />
                    <path
                      d='M5,.5H136A4.5,4.5,0,0,1,140.5,5V19a.5.5,0,0,1-.5.5H1A.5.5,0,0,1,.5,19V5A4.5,4.5,0,0,1,5,.5Z'
                      fill='none'
                    />
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6183, 423)'
                    filter='url(#Video_Production)'
                  >
                    <text
                      id='Video_Production-2'
                      dataName='Video Production'
                      transform='translate(727 490)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Video Production
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6183, 423)'
                    filter='url(#Input-3)'
                  >
                    <text
                      id='Input-8'
                      dataName='Input'
                      transform='translate(718 515)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Input
                      </tspan>
                    </text>
                  </g>
                  <path
                    id='Polygon_15-6'
                    dataName='Polygon 15'
                    d='M4,0,8,7H0Z'
                    transform='translate(6904 913) rotate(180)'
                    fill='#fff'
                  />
                  <g
                    id='Ellipse_149-6'
                    dataName='Ellipse 149'
                    transform='translate(6882 929)'
                    fill='#6363c7'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_150-3'
                    dataName='Ellipse 150'
                    transform='translate(6882 960)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_151-3'
                    dataName='Ellipse 151'
                    transform='translate(6882 982)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_173-2'
                    dataName='Ellipse 173'
                    transform='translate(7024 1026)'
                    fill='#ffa80e'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_175'
                    dataName='Ellipse 175'
                    transform='translate(6882 1070)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_152-3'
                    dataName='Ellipse 152'
                    transform='translate(7023 1004)'
                    fill='#ffa80e'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_174-2'
                    dataName='Ellipse 174'
                    transform='translate(6882 1048)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_176'
                    dataName='Ellipse 176'
                    transform='translate(6882 1092)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_177'
                    dataName='Ellipse 177'
                    transform='translate(6882 1114)'
                    fill='#8b363e'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Motion-2'
                    dataName='Motion'
                    transform='translate(-341)'
                  >
                    <g
                      transform='matrix(1, 0, 0, 1, 6524, 423)'
                      filter='url(#Rectangle_17522-15)'
                    >
                      <g
                        id='Rectangle_17522-56'
                        dataName='Rectangle 17522'
                        transform='translate(714 532)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <path
                      id='Level-16'
                      dataName='Level'
                      d='M2,0H107a0,0,0,0,1,0,0V18a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z'
                      transform='translate(7239 956)'
                      fill='#6f5eb2'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6524, 423)'
                      filter='url(#Motion)'
                    >
                      <text
                        id='Motion-3'
                        dataName='Motion'
                        transform='translate(724 546)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Motion
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6524, 423)'
                      filter='url(#_92)'
                    >
                      <text
                        id='_92-2'
                        dataName='92'
                        transform='translate(819 546)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-13.255' y='0'>
                          92
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g id='VFX' transform='translate(-341 22)'>
                    <g
                      transform='matrix(1, 0, 0, 1, 6524, 401)'
                      filter='url(#Rectangle_17522-16)'
                    >
                      <g
                        id='Rectangle_17522-57'
                        dataName='Rectangle 17522'
                        transform='translate(714 554)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <path
                      id='Level-17'
                      dataName='Level'
                      d='M2,0H94a0,0,0,0,1,0,0V18a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z'
                      transform='translate(7239 956)'
                      fill='#6f5eb2'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6524, 401)'
                      filter='url(#VFX_Sim)'
                    >
                      <text
                        id='VFX_Sim-2'
                        dataName='VFX Sim'
                        transform='translate(724 568)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          VFX Sim
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6524, 401)'
                      filter='url(#_80)'
                    >
                      <text
                        id='_80-3'
                        dataName='80'
                        transform='translate(819 568)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-13.849' y='0'>
                          80
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g
                    id='LookDev-2'
                    dataName='LookDev'
                    transform='translate(-341 66)'
                  >
                    <g
                      transform='matrix(1, 0, 0, 1, 6524, 357)'
                      filter='url(#Rectangle_17522-17)'
                    >
                      <g
                        id='Rectangle_17522-58'
                        dataName='Rectangle 17522'
                        transform='translate(714 598)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <path
                      id='Level-18'
                      dataName='Level'
                      d='M2,0H89a0,0,0,0,1,0,0V18a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z'
                      transform='translate(7239 956)'
                      fill='#6f5eb2'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6524, 357)'
                      filter='url(#LookDev)'
                    >
                      <text
                        id='LookDev-3'
                        dataName='LookDev'
                        transform='translate(724 612)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          LookDev
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6524, 357)'
                      filter='url(#_76)'
                    >
                      <text
                        id='_76-2'
                        dataName='76'
                        transform='translate(819 612)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-12.991' y='0'>
                          76
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g
                    id='Keying-2'
                    dataName='Keying'
                    transform='translate(-341 110)'
                  >
                    <g
                      transform='matrix(1, 0, 0, 1, 6524, 313)'
                      filter='url(#Rectangle_17522-18)'
                    >
                      <g
                        id='Rectangle_17522-59'
                        dataName='Rectangle 17522'
                        transform='translate(714 642)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <path
                      id='Level-19'
                      dataName='Level'
                      d='M2,0H93a0,0,0,0,1,0,0V18a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z'
                      transform='translate(7239 956)'
                      fill='#6f5eb2'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6524, 313)'
                      filter='url(#Keying)'
                    >
                      <text
                        id='Keying-3'
                        dataName='Keying'
                        transform='translate(724 656)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Keying
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6524, 313)'
                      filter='url(#_80-2)'
                    >
                      <text
                        id='_80-4'
                        dataName='80'
                        transform='translate(819 656)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-13.849' y='0'>
                          80
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g id='_3D' dataName='3D' transform='translate(-341 44)'>
                    <g
                      transform='matrix(1, 0, 0, 1, 6524, 379)'
                      filter='url(#Rectangle_17522-19)'
                    >
                      <g
                        id='Rectangle_17522-60'
                        dataName='Rectangle 17522'
                        transform='translate(714 576)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <path
                      id='Level-20'
                      dataName='Level'
                      d='M2,0H81a0,0,0,0,1,0,0V18a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z'
                      transform='translate(7239 956)'
                      fill='#6f5eb2'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6524, 379)'
                      filter='url(#_3D_Modeling)'
                    >
                      <text
                        id='_3D_Modeling-2'
                        dataName='3D Modeling'
                        transform='translate(724 590)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          3D Modeling
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6524, 379)'
                      filter='url(#_69)'
                    >
                      <text
                        id='_69-2'
                        dataName='69'
                        transform='translate(819 590)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-13.915' y='0'>
                          69
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g id='Roto' transform='translate(-341 88)'>
                    <g
                      transform='matrix(1, 0, 0, 1, 6524, 335)'
                      filter='url(#Rectangle_17522-20)'
                    >
                      <g
                        id='Rectangle_17522-61'
                        dataName='Rectangle 17522'
                        transform='translate(714 620)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <path
                      id='Level-21'
                      dataName='Level'
                      d='M2,0H97a0,0,0,0,1,0,0V18a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z'
                      transform='translate(7239 956)'
                      fill='#6f5eb2'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6524, 335)'
                      filter='url(#Rotoscoping)'
                    >
                      <text
                        id='Rotoscoping-2'
                        dataName='Rotoscoping'
                        transform='translate(723 634)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Rotoscoping
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6524, 335)'
                      filter='url(#_83)'
                    >
                      <text
                        id='_83-2'
                        dataName='83'
                        transform='translate(819 634)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-13.42' y='0'>
                          83
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g id='Comp' transform='translate(-341 132)'>
                    <g
                      transform='matrix(1, 0, 0, 1, 6524, 291)'
                      filter='url(#Rectangle_17522-21)'
                    >
                      <g
                        id='Rectangle_17522-62'
                        dataName='Rectangle 17522'
                        transform='translate(714 664)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <path
                      id='Level-22'
                      dataName='Level'
                      d='M2,0H103a0,0,0,0,1,0,0V18a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z'
                      transform='translate(7239 956)'
                      fill='#6f5eb2'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6524, 291)'
                      filter='url(#Composition)'
                    >
                      <text
                        id='Composition-2'
                        dataName='Composition'
                        transform='translate(723 678)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Composition
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6524, 291)'
                      filter='url(#_88-2)'
                    >
                      <text
                        id='_88-4'
                        dataName='88'
                        transform='translate(819 678)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-13.882' y='0'>
                          88
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g id='Edit' transform='translate(-341 154)'>
                    <g
                      transform='matrix(1, 0, 0, 1, 6524, 269)'
                      filter='url(#Rectangle_17522-22)'
                    >
                      <g
                        id='Rectangle_17522-63'
                        dataName='Rectangle 17522'
                        transform='translate(714 686)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <rect
                      id='Level-23'
                      dataName='Level'
                      width='119'
                      height='18'
                      rx='2'
                      transform='translate(7239 956)'
                      fill='#6f5eb2'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6524, 269)'
                      filter='url(#Editing)'
                    >
                      <text
                        id='Editing-2'
                        dataName='Editing'
                        transform='translate(723 700)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Editing
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6524, 269)'
                      filter='url(#_100-3)'
                    >
                      <text
                        id='_100-6'
                        dataName='100'
                        transform='translate(819 700)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-17.336' y='0'>
                          100
                        </tspan>
                      </text>
                    </g>
                  </g>
                </g>
                <g
                  id='Node_Hard_Skills'
                  dataName='Node_Hard Skills'
                  transform='translate(-6697 -1005)'
                >
                  <g
                    id='Rectangle_17520-7'
                    dataName='Rectangle 17520'
                    transform='translate(7228 1506)'
                    fill='#474747'
                    stroke='#000'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <rect width='143' height='344' rx='5' stroke='none' />
                    <rect
                      x='0.5'
                      y='0.5'
                      width='142'
                      height='343'
                      rx='4.5'
                      fill='none'
                    />
                  </g>
                  <g
                    id='Rectangle_17521-7'
                    dataName='Rectangle 17521'
                    transform='translate(7229 1507)'
                    fill='#2c8a5d'
                    stroke='#355947'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <path
                      d='M5,0H136a5,5,0,0,1,5,5V20a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V5A5,5,0,0,1,5,0Z'
                      stroke='none'
                    />
                    <path
                      d='M5,.5H136A4.5,4.5,0,0,1,140.5,5V19a.5.5,0,0,1-.5.5H1A.5.5,0,0,1,.5,19V5A4.5,4.5,0,0,1,5,.5Z'
                      fill='none'
                    />
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6805, 1163)'
                    filter='url(#Hard_Skills)'
                  >
                    <text
                      id='Hard_Skills-3'
                      dataName='Hard Skills'
                      transform='translate(447 358)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Hard Skills
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6805, 1163)'
                    filter='url(#Data)'
                  >
                    <text
                      id='Data-3'
                      dataName='Data'
                      transform='translate(438 383)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Data
                      </tspan>
                    </text>
                  </g>
                  <path
                    id='Polygon_15-7'
                    dataName='Polygon 15'
                    d='M4,0,8,7H0Z'
                    transform='translate(7246 1521) rotate(180)'
                    fill='#fff'
                  />
                  <g
                    id='Ellipse_149-7'
                    dataName='Ellipse 149'
                    transform='translate(7224 1537)'
                    fill='#c7c729'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g id='Group_3482' dataName='Group 3482'>
                    <g
                      id='Ellipse_151-4'
                      dataName='Ellipse 151'
                      transform='translate(7365 1590)'
                      fill='#426275'
                      stroke='#050506'
                      strokeWidth='1'
                    >
                      <circle cx='5' cy='5' r='5' stroke='none' />
                      <circle cx='5' cy='5' r='4.5' fill='none' />
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6805, 1163)'
                      filter='url(#Rectangle_17522-23)'
                    >
                      <g
                        id='Rectangle_17522-64'
                        dataName='Rectangle 17522'
                        transform='translate(435 413)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='40' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='39'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <line
                      id='Line_53'
                      dataName='Line 53'
                      x2='120'
                      transform='translate(7240.5 1595.5)'
                      fill='none'
                      stroke='#404040'
                      strokeWidth='1'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6805, 1163)'
                      filter='url(#Developer:)'
                    >
                      <text
                        id='Developer:-2'
                        dataName='Developer:'
                        transform='translate(439 407)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Developer:
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6805, 1163)'
                      filter='url(#Exp.)'
                    >
                      <text
                        id='Exp.-6'
                        dataName='Exp.'
                        transform='translate(447 427)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Exp.
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6805, 1163)'
                      filter='url(#Spending)'
                    >
                      <text
                        id='Spending-5'
                        dataName='Spending'
                        transform='translate(447 446)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Spending
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6805, 1163)'
                      filter='url(#_2_years)'
                    >
                      <text
                        id='_2_years-3'
                        dataName='2 years'
                        transform='translate(546 427)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-39.556' y='0'>
                          2 years
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6805, 1163)'
                      filter='url(#_10_)'
                    >
                      <text
                        id='_10_2'
                        dataName='10%'
                        transform='translate(546 446)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-18.777' y='0'>
                          10%
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g
                    id='Group_3483'
                    dataName='Group 3483'
                    transform='translate(0 61)'
                  >
                    <g
                      id='Ellipse_151-5'
                      dataName='Ellipse 151'
                      transform='translate(7365 1590)'
                      fill='#ffa80e'
                      stroke='#050506'
                      strokeWidth='1'
                    >
                      <circle cx='5' cy='5' r='5' stroke='none' />
                      <circle cx='5' cy='5' r='4.5' fill='none' />
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6805, 1102)'
                      filter='url(#Rectangle_17522-24)'
                    >
                      <g
                        id='Rectangle_17522-65'
                        dataName='Rectangle 17522'
                        transform='translate(435 474)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='40' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='39'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <line
                      id='Line_53-2'
                      dataName='Line 53'
                      x2='120'
                      transform='translate(7240.5 1595.5)'
                      fill='none'
                      stroke='#404040'
                      strokeWidth='1'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6805, 1102)'
                      filter='url(#Graphics_Design:)'
                    >
                      <text
                        id='Graphics_Design:-2'
                        dataName='Graphics Design:'
                        transform='translate(439 468)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Graphics Design:
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6805, 1102)'
                      filter='url(#Exp.-2)'
                    >
                      <text
                        id='Exp.-7'
                        dataName='Exp.'
                        transform='translate(447 488)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Exp.
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6805, 1102)'
                      filter='url(#Spending-2)'
                    >
                      <text
                        id='Spending-6'
                        dataName='Spending'
                        transform='translate(447 507)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Spending
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6805, 1102)'
                      filter='url(#_4_years)'
                    >
                      <text
                        id='_4_years-2'
                        dataName='4 years'
                        transform='translate(546 488)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-40.15' y='0'>
                          4 years
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6805, 1102)'
                      filter='url(#_30_)'
                    >
                      <text
                        id='_30_2'
                        dataName='30%'
                        transform='translate(546 507)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-21.736' y='0'>
                          30%
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g
                    id='Group_3484'
                    dataName='Group 3484'
                    transform='translate(0 122)'
                  >
                    <g
                      id='Ellipse_151-6'
                      dataName='Ellipse 151'
                      transform='translate(7365 1590)'
                      fill='#6363c7'
                      stroke='#050506'
                      strokeWidth='1'
                    >
                      <circle cx='5' cy='5' r='5' stroke='none' />
                      <circle cx='5' cy='5' r='4.5' fill='none' />
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6805, 1041)'
                      filter='url(#Rectangle_17522-25)'
                    >
                      <g
                        id='Rectangle_17522-66'
                        dataName='Rectangle 17522'
                        transform='translate(435 535)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='40' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='39'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <line
                      id='Line_53-3'
                      dataName='Line 53'
                      x2='120'
                      transform='translate(7240.5 1595.5)'
                      fill='none'
                      stroke='#404040'
                      strokeWidth='1'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6805, 1041)'
                      filter='url(#Video_Production:)'
                    >
                      <text
                        id='Video_Production:-2'
                        dataName='Video Production:'
                        transform='translate(439 529)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Video Production:
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6805, 1041)'
                      filter='url(#Exp.-3)'
                    >
                      <text
                        id='Exp.-8'
                        dataName='Exp.'
                        transform='translate(447 549)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Exp.
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6805, 1041)'
                      filter='url(#Spending-3)'
                    >
                      <text
                        id='Spending-7'
                        dataName='Spending'
                        transform='translate(447 568)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Spending
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6805, 1041)'
                      filter='url(#_3_years)'
                    >
                      <text
                        id='_3_years-2'
                        dataName='3 years'
                        transform='translate(546 549)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-39.71' y='0'>
                          3 years
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6805, 1041)'
                      filter='url(#_25_)'
                    >
                      <text
                        id='_25_2'
                        dataName='25%'
                        transform='translate(546 568)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-21.582' y='0'>
                          25%
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g
                    id='Group_3485'
                    dataName='Group 3485'
                    transform='translate(0 183)'
                  >
                    <g
                      id='Ellipse_151-7'
                      dataName='Ellipse 151'
                      transform='translate(7365 1590)'
                      fill='#8b363e'
                      stroke='#050506'
                      strokeWidth='1'
                    >
                      <circle cx='5' cy='5' r='5' stroke='none' />
                      <circle cx='5' cy='5' r='4.5' fill='none' />
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6805, 980)'
                      filter='url(#Rectangle_17522-26)'
                    >
                      <g
                        id='Rectangle_17522-67'
                        dataName='Rectangle 17522'
                        transform='translate(435 596)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='40' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='39'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <line
                      id='Line_53-4'
                      dataName='Line 53'
                      x2='120'
                      transform='translate(7240.5 1595.5)'
                      fill='none'
                      stroke='#404040'
                      strokeWidth='1'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6805, 980)'
                      filter='url(#Sound_Production:)'
                    >
                      <text
                        id='Sound_Production:-2'
                        dataName='Sound Production:'
                        transform='translate(439 590)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Sound Production:
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6805, 980)'
                      filter='url(#Exp.-4)'
                    >
                      <text
                        id='Exp.-9'
                        dataName='Exp.'
                        transform='translate(447 610)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Exp.
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6805, 980)'
                      filter='url(#Spending-4)'
                    >
                      <text
                        id='Spending-8'
                        dataName='Spending'
                        transform='translate(447 629)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Spending
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6805, 980)'
                      filter='url(#_2_years-2)'
                    >
                      <text
                        id='_2_years-4'
                        dataName='2 years'
                        transform='translate(546 610)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-39.556' y='0'>
                          2 years
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6805, 980)'
                      filter='url(#_55_)'
                    >
                      <text
                        id='_55_2'
                        dataName='55%'
                        transform='translate(546 629)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-22.165' y='0'>
                          55%
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6805, 1163)'
                    filter='url(#Range)'
                  >
                    <text
                      id='Range-2'
                      dataName='Range'
                      transform='translate(438 653)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Range
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6805, 1163)'
                    filter='url(#Map)'
                  >
                    <text
                      id='Map-2'
                      dataName='Map'
                      transform='translate(438 674)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Map
                      </tspan>
                    </text>
                  </g>
                  <g
                    id='Ellipse_178'
                    dataName='Ellipse 178'
                    transform='translate(7224 1807)'
                    fill='#c7c729'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_179'
                    dataName='Ellipse 179'
                    transform='translate(7224 1828)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                </g>
                <g id='Node_ColorRamp' transform='translate(-6944 -936)'>
                  <g
                    id='Rectangle_17520-8'
                    dataName='Rectangle 17520'
                    transform='translate(7136 1776)'
                    fill='#474747'
                    stroke='#000'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <rect width='245' height='191' rx='5' stroke='none' />
                    <rect
                      x='0.5'
                      y='0.5'
                      width='244'
                      height='190'
                      rx='4.5'
                      fill='none'
                    />
                  </g>
                  <g
                    id='Rectangle_17521-8'
                    dataName='Rectangle 17521'
                    transform='translate(7137 1777)'
                    fill='#4b89af'
                    stroke='#404548'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <path
                      d='M4,0H239a4,4,0,0,1,4,4V20a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V4A4,4,0,0,1,4,0Z'
                      stroke='none'
                    />
                    <path
                      d='M4,.5H239A3.5,3.5,0,0,1,242.5,4V19a.5.5,0,0,1-.5.5H1A.5.5,0,0,1,.5,19V4A3.5,3.5,0,0,1,4,.5Z'
                      fill='none'
                    />
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 7052, 1094)'
                    filter='url(#ColorRamp)'
                  >
                    <text
                      id='ColorRamp-2'
                      dataName='ColorRamp'
                      transform='translate(108 697)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        ColorRamp
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 7052, 1094)'
                    filter='url(#Color)'
                  >
                    <text
                      id='Color-3'
                      dataName='Color'
                      transform='translate(309 722)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-29.381' y='0'>
                        Color
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 7052, 1094)'
                    filter='url(#Alpha)'
                  >
                    <text
                      id='Alpha-2'
                      dataName='Alpha'
                      transform='translate(309 744)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-32.032' y='0'>
                        Alpha
                      </tspan>
                    </text>
                  </g>
                  <path
                    id='Polygon_15-8'
                    dataName='Polygon 15'
                    d='M4,0,8,7H0Z'
                    transform='translate(7154 1791) rotate(180)'
                    fill='#fff'
                  />
                  <g
                    id='Ellipse_149-8'
                    dataName='Ellipse 149'
                    transform='translate(7375 1807)'
                    fill='#c7c729'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_158'
                    dataName='Ellipse 158'
                    transform='translate(7375 1829)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Group_3473'
                    dataName='Group 3473'
                    transform='translate(67.644 903)'
                  >
                    <g
                      transform='matrix(1, 0, 0, 1, 6984.36, 191)'
                      filter='url(#Rectangle_17522-27)'
                    >
                      <g
                        id='Rectangle_17522-68'
                        dataName='Rectangle 17522'
                        transform='translate(253 764)'
                        fill='#2c2c2c'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='64' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='63'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6984.36, 191)'
                      filter='url(#Linear)'
                    >
                      <text
                        id='Linear-2'
                        dataName='Linear'
                        transform='translate(261 778)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Linear
                        </tspan>
                      </text>
                    </g>
                    <path
                      id='Path_3402-2'
                      dataName='Path 3402'
                      d='M3.289,6.578,0,3.289,3.289,0'
                      transform='translate(7291.175 967.229) rotate(-90)'
                      fill='none'
                      stroke='#a3a3a3'
                      strokeMiterlimit='10'
                      strokeWidth='1'
                    />
                  </g>
                  <g
                    id='Group_3474'
                    dataName='Group 3474'
                    transform='translate(3.706 903)'
                  >
                    <g
                      transform='matrix(1, 0, 0, 1, 7048.29, 191)'
                      filter='url(#Rectangle_17522-28)'
                    >
                      <g
                        id='Rectangle_17522-69'
                        dataName='Rectangle 17522'
                        transform='translate(189 764)'
                        fill='#2c2c2c'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='63' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='62'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 7048.29, 191)'
                      filter='url(#PPF)'
                    >
                      <text
                        id='PPF-2'
                        dataName='PPF'
                        transform='translate(197 778)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          PPF
                        </tspan>
                      </text>
                    </g>
                    <path
                      id='Path_3402-3'
                      dataName='Path 3402'
                      d='M3.289,6.578,0,3.289,3.289,0'
                      transform='translate(7290.113 967.229) rotate(-90)'
                      fill='none'
                      stroke='#a3a3a3'
                      strokeMiterlimit='10'
                      strokeWidth='1'
                    />
                  </g>
                  <path
                    id='Path_3403'
                    dataName='Path 3403'
                    d='M4.3,8.6,0,4.3,4.3,0'
                    transform='translate(7208.806 1870.229) rotate(-90)'
                    fill='none'
                    stroke='#a3a3a3'
                    strokeMiterlimit='10'
                    strokeWidth='1'
                  />
                  <line
                    id='Line_54'
                    dataName='Line 54'
                    x2='8'
                    transform='translate(7179.5 1867.5)'
                    fill='none'
                    stroke='#707070'
                    strokeWidth='1'
                  />
                  <g id='_' dataName='+' transform='translate(-468)'>
                    <line
                      id='Line_55'
                      dataName='Line 55'
                      y2='8'
                      transform='translate(7625.5 1863.5)'
                      fill='none'
                      stroke='#707070'
                      strokeWidth='1'
                    />
                    <line
                      id='Line_56'
                      dataName='Line 56'
                      x2='8'
                      transform='translate(7621.5 1867.5)'
                      fill='none'
                      stroke='#707070'
                      strokeWidth='1'
                    />
                  </g>
                  <g
                    id='Ellipse_160'
                    dataName='Ellipse 160'
                    transform='translate(7132 1943)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Group_3475'
                    dataName='Group 3475'
                    transform='translate(-91 983)'
                  >
                    <g
                      transform='matrix(1, 0, 0, 1, 7143, 111)'
                      filter='url(#Rectangle_17522-29)'
                    >
                      <g
                        id='Rectangle_17522-70'
                        dataName='Rectangle 17522'
                        transform='translate(95 844)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='222' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='221'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <path
                      id='Level-24'
                      dataName='Level'
                      d='M2,0H111a0,0,0,0,1,0,0V18a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z'
                      transform='translate(7239 956)'
                      fill='#547ab5'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 7143, 111)'
                      filter='url(#Fac)'
                    >
                      <text
                        id='Fac-2'
                        dataName='Fac'
                        transform='translate(103 858)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Fac
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 7143, 111)'
                      filter='url(#_0.500)'
                    >
                      <text
                        id='_0.500-2'
                        dataName='0.500'
                        transform='translate(308 858)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-29.942' y='0'>
                          0.500
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g
                    id='Group_3476'
                    dataName='Group 3476'
                    transform='translate(-18.498 958)'
                  >
                    <g
                      transform='matrix(1, 0, 0, 1, 7070.5, 136)'
                      filter='url(#Rectangle_17522-30)'
                    >
                      <g
                        id='Rectangle_17522-71'
                        dataName='Rectangle 17522'
                        transform='translate(168 820)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='148' height='19' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='147'
                          height='18'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 7070.5, 136)'
                      filter='url(#Exp.-5)'
                    >
                      <text
                        id='Exp.-10'
                        dataName='Exp.'
                        transform='translate(183 833)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Exp.
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 7070.5, 136)'
                      filter='url(#_0.000)'
                    >
                      <text
                        id='_0.000-2'
                        dataName='0.000'
                        transform='translate(307 833)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-29.942' y='0'>
                          0.000
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g
                    id='Group_3477'
                    dataName='Group 3477'
                    transform='translate(-91.498 958)'
                  >
                    <g
                      transform='matrix(1, 0, 0, 1, 7143.5, 136)'
                      filter='url(#Rectangle_17522-31)'
                    >
                      <g
                        id='Rectangle_17522-72'
                        dataName='Rectangle 17522'
                        transform='translate(95 820)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='63' height='19' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='62'
                          height='18'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 7143.5, 136)'
                      filter='url(#_0)'
                    >
                      <text
                        id='_0-2'
                        dataName='0'
                        transform='translate(123 833)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          0
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g id='Group_3480' dataName='Group 3480'>
                    <g
                      transform='matrix(1, 0, 0, 1, 7052, 1094)'
                      filter='url(#Rectangle_17527)'
                    >
                      <g
                        id='Rectangle_17527-2'
                        dataName='Rectangle 17527'
                        transform='translate(100 788)'
                        stroke='#000'
                        strokeWidth='1'
                        fill='url(#linear-gradient)'
                      >
                        <rect width='212' height='21' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='211'
                          height='20'
                          fill='none'
                        />
                      </g>
                    </g>
                    <line
                      id='Line_57'
                      dataName='Line 57'
                      y2='3'
                      transform='translate(7153.5 1882.5)'
                      fill='none'
                      stroke='#fff'
                      strokeWidth='1'
                    />
                    <line
                      id='Line_58'
                      dataName='Line 58'
                      y2='3'
                      transform='translate(7153.5 1886.5)'
                      fill='none'
                      stroke='#fff'
                      strokeWidth='1'
                    />
                    <line
                      id='Line_59'
                      dataName='Line 59'
                      y2='3'
                      transform='translate(7153.5 1890.5)'
                      fill='none'
                      stroke='#fff'
                      strokeWidth='1'
                    />
                    <g
                      id='Group_3478'
                      dataName='Group 3478'
                      transform='translate(-468)'
                    >
                      <path
                        id='Path_3405'
                        dataName='Path 3405'
                        d='M7616.521,1898v7.513h9.965V1898l-5-4.125Z'
                        fill='gray'
                        stroke='#000'
                        strokeWidth='1'
                      />
                      <rect
                        id='Rectangle_17528'
                        dataName='Rectangle 17528'
                        width='7'
                        height='5'
                        transform='translate(7618 1899)'
                      />
                    </g>
                    <g
                      id='Group_3479'
                      dataName='Group 3479'
                      transform='translate(-258)'
                    >
                      <path
                        id='Path_3405-2'
                        dataName='Path 3405'
                        d='M7616.521,1898v7.513h9.965V1898l-5-4.125Z'
                        fill='gray'
                        stroke='#000'
                        strokeWidth='1'
                      />
                      <rect
                        id='Rectangle_17528-2'
                        dataName='Rectangle 17528'
                        width='7'
                        height='5'
                        transform='translate(7618 1899)'
                        fill='#fff'
                      />
                    </g>
                  </g>
                </g>
                <g id='Node_YouTube' transform='translate(-6991 36)'>
                  <g
                    id='Rectangle_17520-9'
                    dataName='Rectangle 17520'
                    transform='translate(8093 881)'
                    fill='#474747'
                    stroke='#000'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <rect width='143' height='108' rx='5' stroke='none' />
                    <rect
                      x='0.5'
                      y='0.5'
                      width='142'
                      height='107'
                      rx='4.5'
                      fill='none'
                    />
                  </g>
                  <g
                    id='Rectangle_17521-9'
                    dataName='Rectangle 17521'
                    transform='translate(8094 882)'
                    fill='#9e343e'
                    stroke='#8c373e'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <path
                      d='M5,0H136a5,5,0,0,1,5,5V20a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V5A5,5,0,0,1,5,0Z'
                      stroke='none'
                    />
                    <path
                      d='M5,.5H136A4.5,4.5,0,0,1,140.5,5V19a.5.5,0,0,1-.5.5H1A.5.5,0,0,1,.5,19V5A4.5,4.5,0,0,1,5,.5Z'
                      fill='none'
                    />
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 7099, 122)'
                    filter='url(#Output)'
                  >
                    <text
                      id='Output-3'
                      dataName='Output'
                      transform='translate(1018 774)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Output
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 7099, 122)'
                    filter='url(#Color-2)'
                  >
                    <text
                      id='Color-4'
                      dataName='Color'
                      transform='translate(1117 799)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-29.381' y='0'>
                        Color
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 7099, 122)'
                    filter='url(#Input-4)'
                  >
                    <text
                      id='Input-9'
                      dataName='Input'
                      transform='translate(1009 821)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Input
                      </tspan>
                    </text>
                  </g>
                  <path
                    id='Polygon_15-9'
                    dataName='Polygon 15'
                    d='M4,0,8,7H0Z'
                    transform='translate(8111 896) rotate(180)'
                    fill='#fff'
                  />
                  <g
                    id='Ellipse_149-9'
                    dataName='Ellipse 149'
                    transform='translate(8230 912)'
                    fill='#c7c729'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_158-2'
                    dataName='Ellipse 158'
                    transform='translate(8089 934)'
                    fill='#8b363e'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Group_3462'
                    dataName='Group 3462'
                    transform='translate(866 5)'
                  >
                    <g
                      transform='matrix(1, 0, 0, 1, 6233, 117)'
                      filter='url(#Rectangle_17522-32)'
                    >
                      <g
                        id='Rectangle_17522-73'
                        dataName='Rectangle 17522'
                        transform='translate(1005 838)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6233, 117)'
                      filter='url(#YouTube_CH)'
                    >
                      <text
                        id='YouTube_CH-2'
                        dataName='YouTube CH'
                        transform='translate(1021 852)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          YouTube CH
                        </tspan>
                      </text>
                    </g>
                  </g>
                </g>
              </g>
              <g id='Soft_Skills-3' dataName='Soft Skills'>
                <path
                  id='Path_3393'
                  dataName='Path 3393'
                  d='M5357.754,2923.9c91.746,0,131.775-46.736,318.735-46.736'
                  transform='translate(-3973 -2285)'
                  fill='none'
                  stroke='#2f7a56'
                  strokeWidth='2'
                />
                <path
                  id='Path_3394'
                  dataName='Path 3394'
                  d='M5357.686,2900.885c84.962,0,204.151-177.951,309.831-177.951'
                  transform='translate(-3973 -2285)'
                  fill='none'
                  stroke='#6f5eb2'
                  strokeWidth='2'
                />
                <path
                  id='Path_3395'
                  dataName='Path 3395'
                  d='M5358.26,2879.864c67.809-.37,51.533-151.229,104.324-151.229'
                  transform='translate(-3973 -2285)'
                  fill='none'
                  stroke='#bc3b47'
                  strokeWidth='2'
                />
                <path
                  id='Path_3396'
                  dataName='Path 3396'
                  d='M5357.761,2857.454c56.725,0,35.919-260.534,234.561-260.534'
                  transform='translate(-3973 -2285)'
                  fill='none'
                  stroke='#4e88ab'
                  strokeWidth='2'
                />
                <path
                  id='Path_3390'
                  dataName='Path 3390'
                  d='M5357.058,2945.416c33.859-.569,81.646-25.273,118.351-25.557'
                  transform='translate(-3973 -2285)'
                  fill='none'
                  stroke='#bf7e0b'
                  strokeWidth='2'
                />
                <path
                  id='Path_3391'
                  dataName='Path 3391'
                  d='M5357.091,2967.535c55.2-.569,196.075,124.425,320.086,124.425'
                  transform='translate(-3973 -2285)'
                  fill='none'
                  stroke='#cbc02e'
                  strokeWidth='2'
                />
                <path
                  id='Path_3392'
                  dataName='Path 3392'
                  d='M5357.979,2991.3c53.561,0,41.035,116.043,90.7,116.043'
                  transform='translate(-3973 -2285)'
                  fill='none'
                  stroke='#7f7f7f'
                  strokeWidth='2'
                />
                <g
                  id='Soft_Skills-4'
                  dataName='Soft Skills'
                  transform='translate(-5644 -418)'
                >
                  <g
                    id='Rectangle_17520-10'
                    dataName='Rectangle 17520'
                    transform='translate(6886 898)'
                    fill='#474747'
                    stroke='#000'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <rect width='143' height='263' rx='5' stroke='none' />
                    <rect
                      x='0.5'
                      y='0.5'
                      width='142'
                      height='262'
                      rx='4.5'
                      fill='none'
                    />
                  </g>
                  <g
                    id='Rectangle_17521-10'
                    dataName='Rectangle 17521'
                    transform='translate(6887 899)'
                    fill='#2c8a5d'
                    stroke='#355947'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <path
                      d='M4,0H137a4,4,0,0,1,4,4V20a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V4A4,4,0,0,1,4,0Z'
                      stroke='none'
                    />
                    <path
                      d='M4,.5H137A3.5,3.5,0,0,1,140.5,4V19a.5.5,0,0,1-.5.5H1A.5.5,0,0,1,.5,19V4A3.5,3.5,0,0,1,4,.5Z'
                      fill='none'
                    />
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5767, 576)'
                    filter='url(#Soft_Skills)'
                  >
                    <text
                      id='Soft_Skills-5'
                      dataName='Soft Skills'
                      transform='translate(1143 337)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Soft Skills
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5767, 576)'
                    filter='url(#Data-2)'
                  >
                    <text
                      id='Data-4'
                      dataName='Data'
                      transform='translate(1130 362)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Data
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5767, 576)'
                    filter='url(#Normal-3)'
                  >
                    <text
                      id='Normal-7'
                      dataName='Normal'
                      transform='translate(1174 572)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-40.348' y='0'>
                        Normal
                      </tspan>
                    </text>
                  </g>
                  <path
                    id='Polygon_15-10'
                    dataName='Polygon 15'
                    d='M4,0,8,7H0Z'
                    transform='translate(6904 913) rotate(180)'
                    fill='#fff'
                  />
                  <g
                    id='Ellipse_149-10'
                    dataName='Ellipse 149'
                    transform='translate(6882 929)'
                    fill='#c7c729'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_150-4'
                    dataName='Ellipse 150'
                    transform='translate(7023 985)'
                    fill='#426275'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_151-8'
                    dataName='Ellipse 151'
                    transform='translate(7023 1007)'
                    fill='#8b363e'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_165-2'
                    dataName='Ellipse 165'
                    transform='translate(7023 1051)'
                    fill='#2c8a5d'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_167-2'
                    dataName='Ellipse 167'
                    transform='translate(7023 1095)'
                    fill='#ffef0e'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_152-4'
                    dataName='Ellipse 152'
                    transform='translate(7023 1029)'
                    fill='#6363c7'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_164-2'
                    dataName='Ellipse 164'
                    transform='translate(7023 1073)'
                    fill='#ffa80e'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_161-2'
                    dataName='Ellipse 161'
                    transform='translate(6882 1139)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Group_3461-2'
                    dataName='Group 3461'
                    transform='translate(-341)'
                  >
                    <g
                      transform='matrix(1, 0, 0, 1, 6108, 576)'
                      filter='url(#Rectangle_17522-33)'
                    >
                      <g
                        id='Rectangle_17522-74'
                        dataName='Rectangle 17522'
                        transform='translate(1130 379)'
                        fill='#2c2c2c'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6108, 576)'
                      filter='url(#Lists)'
                    >
                      <text
                        id='Lists-2'
                        dataName='Lists'
                        transform='translate(1138 393)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Lists
                        </tspan>
                      </text>
                    </g>
                    <path
                      id='Path_3402-4'
                      dataName='Path 3402'
                      d='M226.159,149.1l-3.289-3.289,3.289-3.289'
                      transform='translate(7206.294 1190.099) rotate(-90)'
                      fill='none'
                      stroke='#a3a3a3'
                      strokeMiterlimit='10'
                      strokeWidth='1'
                    />
                  </g>
                  <g id='Com' transform='translate(-341 25)'>
                    <g
                      transform='matrix(1, 0, 0, 1, 6108, 551)'
                      filter='url(#Rectangle_17522-34)'
                    >
                      <g
                        id='Rectangle_17522-75'
                        dataName='Rectangle 17522'
                        transform='translate(1130 404)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <path
                      id='Level-25'
                      dataName='Level'
                      d='M2,0H103a0,0,0,0,1,0,0V18a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z'
                      transform='translate(7239 956)'
                      fill='#2c8a5d'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6108, 551)'
                      filter='url(#Communication)'
                    >
                      <text
                        id='Communication-3'
                        dataName='Communication'
                        transform='translate(1146 418)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Communication
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g id='Crit' transform='translate(-341 47)'>
                    <g
                      transform='matrix(1, 0, 0, 1, 6108, 529)'
                      filter='url(#Rectangle_17522-35)'
                    >
                      <g
                        id='Rectangle_17522-76'
                        dataName='Rectangle 17522'
                        transform='translate(1130 426)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <path
                      id='Level-26'
                      dataName='Level'
                      d='M2,0H95a0,0,0,0,1,0,0V18a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z'
                      transform='translate(7239 956)'
                      fill='#2c8a5d'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6108, 529)'
                      filter='url(#Critical_Thinking)'
                    >
                      <text
                        id='Critical_Thinking-3'
                        dataName='Critical Thinking'
                        transform='translate(1146 440)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Critical Thinking
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g id='Pos' transform='translate(-341 91)'>
                    <g
                      transform='matrix(1, 0, 0, 1, 6108, 485)'
                      filter='url(#Rectangle_17522-36)'
                    >
                      <g
                        id='Rectangle_17522-77'
                        dataName='Rectangle 17522'
                        transform='translate(1130 470)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <rect
                      id='Level-27'
                      dataName='Level'
                      width='119'
                      height='18'
                      rx='2'
                      transform='translate(7239 956)'
                      fill='#2c8a5d'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6108, 485)'
                      filter='url(#Positive_Attitude)'
                    >
                      <text
                        id='Positive_Attitude-3'
                        dataName='Positive Attitude'
                        transform='translate(1146 484)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Positive Attitude
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g id='Work' transform='translate(-341 135)'>
                    <g
                      transform='matrix(1, 0, 0, 1, 6108, 441)'
                      filter='url(#Rectangle_17522-37)'
                    >
                      <g
                        id='Rectangle_17522-78'
                        dataName='Rectangle 17522'
                        transform='translate(1130 514)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <path
                      id='Level-28'
                      dataName='Level'
                      d='M2,0H93a0,0,0,0,1,0,0V18a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z'
                      transform='translate(7239 956)'
                      fill='#2c8a5d'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6108, 441)'
                      filter='url(#Work_Ethic)'
                    >
                      <text
                        id='Work_Ethic-3'
                        dataName='Work Ethic'
                        transform='translate(1146 528)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Work Ethic
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g id='Lead' transform='translate(-341 69)'>
                    <g
                      transform='matrix(1, 0, 0, 1, 6108, 507)'
                      filter='url(#Rectangle_17522-38)'
                    >
                      <g
                        id='Rectangle_17522-79'
                        dataName='Rectangle 17522'
                        transform='translate(1130 448)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <path
                      id='Level-29'
                      dataName='Level'
                      d='M2,0H88a0,0,0,0,1,0,0V18a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z'
                      transform='translate(7239 956)'
                      fill='#2c8a5d'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6108, 507)'
                      filter='url(#Leadership)'
                    >
                      <text
                        id='Leadership-3'
                        dataName='Leadership'
                        transform='translate(1146 462)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Leadership
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g id='Team' transform='translate(-341 113)'>
                    <g
                      transform='matrix(1, 0, 0, 1, 6108, 463)'
                      filter='url(#Rectangle_17522-39)'
                    >
                      <g
                        id='Rectangle_17522-80'
                        dataName='Rectangle 17522'
                        transform='translate(1130 492)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <path
                      id='Level-30'
                      dataName='Level'
                      d='M2,0H108a0,0,0,0,1,0,0V18a0,0,0,0,1,0,0H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0Z'
                      transform='translate(7239 956)'
                      fill='#2c8a5d'
                    />
                    <g
                      transform='matrix(1, 0, 0, 1, 6108, 463)'
                      filter='url(#Teamwork)'
                    >
                      <text
                        id='Teamwork-3'
                        dataName='Teamwork'
                        transform='translate(1146 506)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Teamwork
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5767, 576)'
                    filter='url(#More)'
                  >
                    <text
                      id='More-3'
                      dataName='More'
                      transform='translate(1242 553)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-27.434' y='0'>
                        More
                      </tspan>
                    </text>
                  </g>
                  <g
                    id='Ellipse_186'
                    dataName='Ellipse 186'
                    transform='translate(7023 1120)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                </g>
                <g
                  id='Node_Work_Ethic'
                  dataName='Node_Work Ethic'
                  transform='translate(-5180 -127)'
                >
                  <g
                    id='Rectangle_17520-11'
                    dataName='Rectangle 17520'
                    transform='translate(6886 898)'
                    fill='#474747'
                    stroke='#000'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <rect width='143' height='158' rx='5' stroke='none' />
                    <rect
                      x='0.5'
                      y='0.5'
                      width='142'
                      height='157'
                      rx='4.5'
                      fill='none'
                    />
                  </g>
                  <g
                    id='Rectangle_17521-11'
                    dataName='Rectangle 17521'
                    transform='translate(6887 899)'
                    fill='#bb992a'
                    stroke='#8a7624'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <path
                      d='M4,0H137a4,4,0,0,1,4,4V20a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V4A4,4,0,0,1,4,0Z'
                      stroke='none'
                    />
                    <path
                      d='M4,.5H137A3.5,3.5,0,0,1,140.5,4V19a.5.5,0,0,1-.5.5H1A.5.5,0,0,1,.5,19V4A3.5,3.5,0,0,1,4,.5Z'
                      fill='none'
                    />
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5303, 285)'
                    filter='url(#Work_Ethic-2)'
                  >
                    <text
                      id='Work_Ethic-4'
                      dataName='Work Ethic'
                      transform='translate(1607 628)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Work Ethic
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5303, 285)'
                    filter='url(#Skill-3)'
                  >
                    <text
                      id='Skill-12'
                      dataName='Skill'
                      transform='translate(1598 653)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Skill
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5303, 285)'
                    filter='url(#Attentiveness)'
                  >
                    <text
                      id='Attentiveness-2'
                      dataName='Attentiveness'
                      transform='translate(1706 674)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-74.327' y='0'>
                        Attentiveness
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5303, 285)'
                    filter='url(#Independence)'
                  >
                    <text
                      id='Independence-2'
                      dataName='Independence'
                      transform='translate(1706 695)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-80.091' y='0'>
                        Independence
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5303, 285)'
                    filter='url(#Multitasking)'
                  >
                    <text
                      id='Multitasking-2'
                      dataName='Multitasking'
                      transform='translate(1706 716)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-65.956' y='0'>
                        Multitasking
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5303, 285)'
                    filter='url(#Organization)'
                  >
                    <text
                      id='Organization-2'
                      dataName='Organization'
                      transform='translate(1706 737)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-70.598' y='0'>
                        Organization
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5303, 285)'
                    filter='url(#Planning)'
                  >
                    <text
                      id='Planning-2'
                      dataName='Planning'
                      transform='translate(1706 758)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-47.773' y='0'>
                        Planning
                      </tspan>
                    </text>
                  </g>
                  <path
                    id='Polygon_15-11'
                    dataName='Polygon 15'
                    d='M4,0,8,7H0Z'
                    transform='translate(6904 913) rotate(180)'
                    fill='#fff'
                  />
                  <g
                    id='Ellipse_149-11'
                    dataName='Ellipse 149'
                    transform='translate(6882 929)'
                    fill='#ffef0e'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_153-5'
                    dataName='Ellipse 153'
                    transform='translate(7023 950)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_168-3'
                    dataName='Ellipse 168'
                    transform='translate(7023 971)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_169-3'
                    dataName='Ellipse 169'
                    transform='translate(7023 992)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_170-3'
                    dataName='Ellipse 170'
                    transform='translate(7023 1013)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_187'
                    dataName='Ellipse 187'
                    transform='translate(7023 1034)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                </g>
                <g id='Node_Teamwork' transform='translate(-5384 -299)'>
                  <g
                    id='Rectangle_17520-12'
                    dataName='Rectangle 17520'
                    transform='translate(6886 898)'
                    fill='#474747'
                    stroke='#000'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <rect width='143' height='158' rx='5' stroke='none' />
                    <rect
                      x='0.5'
                      y='0.5'
                      width='142'
                      height='157'
                      rx='4.5'
                      fill='none'
                    />
                  </g>
                  <g
                    id='Rectangle_17521-12'
                    dataName='Rectangle 17521'
                    transform='translate(6887 899)'
                    fill='#9e6034'
                    stroke='#945a31'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <path
                      d='M4,0H137a4,4,0,0,1,4,4V20a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V4A4,4,0,0,1,4,0Z'
                      stroke='none'
                    />
                    <path
                      d='M4,.5H137A3.5,3.5,0,0,1,140.5,4V19a.5.5,0,0,1-.5.5H1A.5.5,0,0,1,.5,19V4A3.5,3.5,0,0,1,4,.5Z'
                      fill='none'
                    />
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5507, 457)'
                    filter='url(#Teamwork-2)'
                  >
                    <text
                      id='Teamwork-4'
                      dataName='Teamwork'
                      transform='translate(1403 456)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Teamwork
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5507, 457)'
                    filter='url(#Skill-4)'
                  >
                    <text
                      id='Skill-13'
                      dataName='Skill'
                      transform='translate(1394 481)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Skill
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5507, 457)'
                    filter='url(#Accepting_feedback)'
                  >
                    <text
                      id='Accepting_feedback-2'
                      dataName='Accepting feedback'
                      transform='translate(1502 502)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-111.056' y='0'>
                        Accepting feedback
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5507, 457)'
                    filter='url(#Collaboration)'
                  >
                    <text
                      id='Collaboration-2'
                      dataName='Collaboration'
                      transform='translate(1502 523)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-75.185' y='0'>
                        Collaboration
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5507, 457)'
                    filter='url(#Empathy)'
                  >
                    <text
                      id='Empathy-2'
                      dataName='Empathy'
                      transform='translate(1502 544)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-49.082' y='0'>
                        Empathy
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5507, 457)'
                    filter='url(#Influence)'
                  >
                    <text
                      id='Influence-2'
                      dataName='Influence'
                      transform='translate(1502 565)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-50.468' y='0'>
                        Influence
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5507, 457)'
                    filter='url(#Self-awareness)'
                  >
                    <text
                      id='Self-awareness-2'
                      dataName='Self-awareness'
                      transform='translate(1502 586)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-85.822' y='0'>
                        Self-awareness
                      </tspan>
                    </text>
                  </g>
                  <path
                    id='Polygon_15-12'
                    dataName='Polygon 15'
                    d='M4,0,8,7H0Z'
                    transform='translate(6904 913) rotate(180)'
                    fill='#fff'
                  />
                  <g
                    id='Ellipse_149-12'
                    dataName='Ellipse 149'
                    transform='translate(6882 929)'
                    fill='#ffa80e'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_153-6'
                    dataName='Ellipse 153'
                    transform='translate(7023 950)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_168-4'
                    dataName='Ellipse 168'
                    transform='translate(7023 971)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_169-4'
                    dataName='Ellipse 169'
                    transform='translate(7023 992)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_170-4'
                    dataName='Ellipse 170'
                    transform='translate(7023 1013)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_187-2'
                    dataName='Ellipse 187'
                    transform='translate(7023 1034)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                </g>
                <g id='Node_TMore' transform='translate(-5411 -112)'>
                  <g
                    id='Rectangle_17520-13'
                    dataName='Rectangle 17520'
                    transform='translate(6886 898)'
                    fill='#474747'
                    stroke='#000'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <rect width='143' height='137' rx='5' stroke='none' />
                    <rect
                      x='0.5'
                      y='0.5'
                      width='142'
                      height='136'
                      rx='4.5'
                      fill='none'
                    />
                  </g>
                  <g
                    id='Rectangle_17521-13'
                    dataName='Rectangle 17521'
                    transform='translate(6887 899)'
                    fill='#232323'
                    stroke='#202020'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <path
                      d='M4,0H137a4,4,0,0,1,4,4V20a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V4A4,4,0,0,1,4,0Z'
                      stroke='none'
                    />
                    <path
                      d='M4,.5H137A3.5,3.5,0,0,1,140.5,4V19a.5.5,0,0,1-.5.5H1A.5.5,0,0,1,.5,19V4A3.5,3.5,0,0,1,4,.5Z'
                      fill='none'
                    />
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5534, 270)'
                    filter='url(#More-2)'
                  >
                    <text
                      id='More-4'
                      dataName='More'
                      transform='translate(1376 643)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        More
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5534, 270)'
                    filter='url(#Skill-5)'
                  >
                    <text
                      id='Skill-14'
                      dataName='Skill'
                      transform='translate(1367 668)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Skill
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5534, 270)'
                    filter='url(#Good_attitude)'
                  >
                    <text
                      id='Good_attitude-2'
                      dataName='Good attitude'
                      transform='translate(1475 689)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-76.461' y='0'>
                        Good attitude
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5534, 270)'
                    filter='url(#Positive_work_ethic)'
                  >
                    <text
                      id='Positive_work_ethic-2'
                      dataName='Positive work ethic'
                      transform='translate(1475 710)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-100.507' y='0'>
                        Positive work ethic
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5534, 270)'
                    filter='url(#Training)'
                  >
                    <text
                      id='Training-2'
                      dataName='Training'
                      transform='translate(1475 731)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-44.418' y='0'>
                        Training
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5534, 270)'
                    filter='url(#Others)'
                  >
                    <text
                      id='Others-2'
                      dataName='Others'
                      transform='translate(1475 752)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-36.355' y='0'>
                        Others
                      </tspan>
                    </text>
                  </g>
                  <path
                    id='Polygon_15-13'
                    dataName='Polygon 15'
                    d='M4,0,8,7H0Z'
                    transform='translate(6904 913) rotate(180)'
                    fill='#fff'
                  />
                  <g
                    id='Ellipse_149-13'
                    dataName='Ellipse 149'
                    transform='translate(6882 929)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_153-7'
                    dataName='Ellipse 153'
                    transform='translate(7023 950)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_168-5'
                    dataName='Ellipse 168'
                    transform='translate(7023 971)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_169-5'
                    dataName='Ellipse 169'
                    transform='translate(7023 992)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_170-5'
                    dataName='Ellipse 170'
                    transform='translate(7023 1013)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                </g>
                <g id='Node_Communication' transform='translate(-5268 -622)'>
                  <g
                    id='Rectangle_17520-14'
                    dataName='Rectangle 17520'
                    transform='translate(6886 898)'
                    fill='#474747'
                    stroke='#000'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <rect width='143' height='116' rx='5' stroke='none' />
                    <rect
                      x='0.5'
                      y='0.5'
                      width='142'
                      height='115'
                      rx='4.5'
                      fill='none'
                    />
                  </g>
                  <g
                    id='Rectangle_17521-14'
                    dataName='Rectangle 17521'
                    transform='translate(6887 899)'
                    fill='#4b89af'
                    stroke='#404548'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <path
                      d='M4,0H137a4,4,0,0,1,4,4V20a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V4A4,4,0,0,1,4,0Z'
                      stroke='none'
                    />
                    <path
                      d='M4,.5H137A3.5,3.5,0,0,1,140.5,4V19a.5.5,0,0,1-.5.5H1A.5.5,0,0,1,.5,19V4A3.5,3.5,0,0,1,4,.5Z'
                      fill='none'
                    />
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5391, 780)'
                    filter='url(#Communication-2)'
                  >
                    <text
                      id='Communication-4'
                      dataName='Communication'
                      transform='translate(1519 133)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Communication
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5391, 780)'
                    filter='url(#Skill-6)'
                  >
                    <text
                      id='Skill-15'
                      dataName='Skill'
                      transform='translate(1510 158)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Skill
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5391, 780)'
                    filter='url(#Listening)'
                  >
                    <text
                      id='Listening-2'
                      dataName='Listening'
                      transform='translate(1618 179)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-48.246' y='0'>
                        Listening
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5391, 780)'
                    filter='url(#Presentation-2)'
                  >
                    <text
                      id='Presentation-4'
                      dataName='Presentation'
                      transform='translate(1618 200)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-69.124' y='0'>
                        Presentation
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5391, 780)'
                    filter='url(#Storytelling)'
                  >
                    <text
                      id='Storytelling-2'
                      dataName='Storytelling'
                      transform='translate(1618 221)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-61.215' y='0'>
                        Storytelling
                      </tspan>
                    </text>
                  </g>
                  <path
                    id='Polygon_15-14'
                    dataName='Polygon 15'
                    d='M4,0,8,7H0Z'
                    transform='translate(6904 913) rotate(180)'
                    fill='#fff'
                  />
                  <g
                    id='Ellipse_149-14'
                    dataName='Ellipse 149'
                    transform='translate(6882 929)'
                    fill='#426275'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_153-8'
                    dataName='Ellipse 153'
                    transform='translate(7023 950)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_168-6'
                    dataName='Ellipse 168'
                    transform='translate(7023 971)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_169-6'
                    dataName='Ellipse 169'
                    transform='translate(7023 992)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                </g>
                <g
                  id='Node_TPositive_Attitude'
                  dataName='Node_TPositive Attitude'
                  transform='translate(-5183 -342)'
                >
                  <g
                    id='Rectangle_17520-15'
                    dataName='Rectangle 17520'
                    transform='translate(6886 898)'
                    fill='#474747'
                    stroke='#000'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <rect width='143' height='137' rx='5' stroke='none' />
                    <rect
                      x='0.5'
                      y='0.5'
                      width='142'
                      height='136'
                      rx='4.5'
                      fill='none'
                    />
                  </g>
                  <g
                    id='Rectangle_17521-15'
                    dataName='Rectangle 17521'
                    transform='translate(6887 899)'
                    fill='#2c8a5d'
                    stroke='#355947'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <path
                      d='M4,0H137a4,4,0,0,1,4,4V20a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V4A4,4,0,0,1,4,0Z'
                      stroke='none'
                    />
                    <path
                      d='M4,.5H137A3.5,3.5,0,0,1,140.5,4V19a.5.5,0,0,1-.5.5H1A.5.5,0,0,1,.5,19V4A3.5,3.5,0,0,1,4,.5Z'
                      fill='none'
                    />
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5306, 500)'
                    filter='url(#Positive_Attitude-2)'
                  >
                    <text
                      id='Positive_Attitude-4'
                      dataName='Positive Attitude'
                      transform='translate(1604 413)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Positive Attitude
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5306, 500)'
                    filter='url(#Skill-7)'
                  >
                    <text
                      id='Skill-16'
                      dataName='Skill'
                      transform='translate(1595 438)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Skill
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5306, 500)'
                    filter='url(#Confidence)'
                  >
                    <text
                      id='Confidence-2'
                      dataName='Confidence'
                      transform='translate(1703 459)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-63.69' y='0'>
                        Confidence
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5306, 500)'
                    filter='url(#Energy)'
                  >
                    <text
                      id='Energy-2'
                      dataName='Energy'
                      transform='translate(1703 480)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-37.235' y='0'>
                        Energy
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5306, 500)'
                    filter='url(#Friendliness)'
                  >
                    <text
                      id='Friendliness-2'
                      dataName='Friendliness'
                      transform='translate(1703 501)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-64.405' y='0'>
                        Friendliness
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5306, 500)'
                    filter='url(#Respectability)'
                  >
                    <text
                      id='Respectability-2'
                      dataName='Respectability'
                      transform='translate(1703 522)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-77.374' y='0'>
                        Respectability
                      </tspan>
                    </text>
                  </g>
                  <path
                    id='Polygon_15-15'
                    dataName='Polygon 15'
                    d='M4,0,8,7H0Z'
                    transform='translate(6904 913) rotate(180)'
                    fill='#fff'
                  />
                  <g
                    id='Ellipse_149-15'
                    dataName='Ellipse 149'
                    transform='translate(6882 929)'
                    fill='#2c8a5d'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_153-9'
                    dataName='Ellipse 153'
                    transform='translate(7023 950)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_168-7'
                    dataName='Ellipse 168'
                    transform='translate(7023 971)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_169-7'
                    dataName='Ellipse 169'
                    transform='translate(7023 992)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_170-6'
                    dataName='Ellipse 170'
                    transform='translate(7023 1013)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                </g>
                <g id='Node_Leadership' transform='translate(-5193 -495)'>
                  <g
                    id='Rectangle_17520-16'
                    dataName='Rectangle 17520'
                    transform='translate(6886 898)'
                    fill='#474747'
                    stroke='#000'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <rect width='143' height='137' rx='5' stroke='none' />
                    <rect
                      x='0.5'
                      y='0.5'
                      width='142'
                      height='136'
                      rx='4.5'
                      fill='none'
                    />
                  </g>
                  <g
                    id='Rectangle_17521-16'
                    dataName='Rectangle 17521'
                    transform='translate(6887 899)'
                    fill='#6f5eb2'
                    stroke='#645599'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <path
                      d='M4,0H137a4,4,0,0,1,4,4V20a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V4A4,4,0,0,1,4,0Z'
                      stroke='none'
                    />
                    <path
                      d='M4,.5H137A3.5,3.5,0,0,1,140.5,4V19a.5.5,0,0,1-.5.5H1A.5.5,0,0,1,.5,19V4A3.5,3.5,0,0,1,4,.5Z'
                      fill='none'
                    />
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5316, 653)'
                    filter='url(#Leadership-2)'
                  >
                    <text
                      id='Leadership-4'
                      dataName='Leadership'
                      transform='translate(1594 260)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Leadership
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5316, 653)'
                    filter='url(#Skill-8)'
                  >
                    <text
                      id='Skill-17'
                      dataName='Skill'
                      transform='translate(1585 285)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Skill
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5316, 653)'
                    filter='url(#Giving_feedback)'
                  >
                    <text
                      id='Giving_feedback-2'
                      dataName='Giving feedback'
                      transform='translate(1693 306)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-89.463' y='0'>
                        Giving feedback
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5316, 653)'
                    filter='url(#Inspiring_people)'
                  >
                    <text
                      id='Inspiring_people-2'
                      dataName='Inspiring people'
                      transform='translate(1693 327)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-88.11' y='0'>
                        Inspiring people
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5316, 653)'
                    filter='url(#Management)'
                  >
                    <text
                      id='Management-2'
                      dataName='Management'
                      transform='translate(1693 348)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-74.833' y='0'>
                        Management
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5316, 653)'
                    filter='url(#Motivating)'
                  >
                    <text
                      id='Motivating-2'
                      dataName='Motivating'
                      transform='translate(1693 369)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-58.014' y='0'>
                        Motivating
                      </tspan>
                    </text>
                  </g>
                  <path
                    id='Polygon_15-16'
                    dataName='Polygon 15'
                    d='M4,0,8,7H0Z'
                    transform='translate(6904 913) rotate(180)'
                    fill='#fff'
                  />
                  <g
                    id='Ellipse_149-16'
                    dataName='Ellipse 149'
                    transform='translate(6882 929)'
                    fill='#6363c7'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_153-10'
                    dataName='Ellipse 153'
                    transform='translate(7023 950)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_168-8'
                    dataName='Ellipse 168'
                    transform='translate(7023 971)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_169-8'
                    dataName='Ellipse 169'
                    transform='translate(7023 992)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_170-7'
                    dataName='Ellipse 170'
                    transform='translate(7023 1013)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                </g>
                <g
                  id='Node_Critical_Thinking'
                  dataName='Node_Critical Thinking'
                  transform='translate(-5398 -491)'
                >
                  <g
                    id='Rectangle_17520-17'
                    dataName='Rectangle 17520'
                    transform='translate(6886 898)'
                    fill='#474747'
                    stroke='#000'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <rect width='143' height='158' rx='5' stroke='none' />
                    <rect
                      x='0.5'
                      y='0.5'
                      width='142'
                      height='157'
                      rx='4.5'
                      fill='none'
                    />
                  </g>
                  <g
                    id='Rectangle_17521-17'
                    dataName='Rectangle 17521'
                    transform='translate(6887 899)'
                    fill='#9e343e'
                    stroke='#8c373e'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <path
                      d='M4,0H137a4,4,0,0,1,4,4V20a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V4A4,4,0,0,1,4,0Z'
                      stroke='none'
                    />
                    <path
                      d='M4,.5H137A3.5,3.5,0,0,1,140.5,4V19a.5.5,0,0,1-.5.5H1A.5.5,0,0,1,.5,19V4A3.5,3.5,0,0,1,4,.5Z'
                      fill='none'
                    />
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5521, 649)'
                    filter='url(#Critical_Thinking-2)'
                  >
                    <text
                      id='Critical_Thinking-4'
                      dataName='Critical Thinking'
                      transform='translate(1389 264)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Critical Thinking
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5521, 649)'
                    filter='url(#Skill-9)'
                  >
                    <text
                      id='Skill-18'
                      dataName='Skill'
                      transform='translate(1380 289)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Skill
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5521, 649)'
                    filter='url(#Creativity)'
                  >
                    <text
                      id='Creativity-2'
                      dataName='Creativity'
                      transform='translate(1488 310)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-52.635' y='0'>
                        Creativity
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5521, 649)'
                    filter='url(#Design_aptitude)'
                  >
                    <text
                      id='Design_aptitude-2'
                      dataName='Design aptitude'
                      transform='translate(1488 331)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-87.34' y='0'>
                        Design aptitude
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5521, 649)'
                    filter='url(#Desire_to_learn)'
                  >
                    <text
                      id='Desire_to_learn-2'
                      dataName='Desire to learn'
                      transform='translate(1488 352)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-78.991' y='0'>
                        Desire to learn
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5521, 649)'
                    filter='url(#Problem_solving)'
                  >
                    <text
                      id='Problem_solving-2'
                      dataName='Problem solving'
                      transform='translate(1488 373)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-87.582' y='0'>
                        Problem solving
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 5521, 649)'
                    filter='url(#Outside_the_box)'
                  >
                    <text
                      id='Outside_the_box-2'
                      dataName='Outside the box'
                      transform='translate(1488 394)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-85.877' y='0'>
                        Outside the box
                      </tspan>
                    </text>
                  </g>
                  <path
                    id='Polygon_15-17'
                    dataName='Polygon 15'
                    d='M4,0,8,7H0Z'
                    transform='translate(6904 913) rotate(180)'
                    fill='#fff'
                  />
                  <g
                    id='Ellipse_149-17'
                    dataName='Ellipse 149'
                    transform='translate(6882 929)'
                    fill='#8b363e'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_153-11'
                    dataName='Ellipse 153'
                    transform='translate(7023 950)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_168-9'
                    dataName='Ellipse 168'
                    transform='translate(7023 971)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_169-9'
                    dataName='Ellipse 169'
                    transform='translate(7023 992)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_170-8'
                    dataName='Ellipse 170'
                    transform='translate(7023 1013)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    id='Ellipse_188'
                    dataName='Ellipse 188'
                    transform='translate(7023 1034)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                </g>
              </g>
              <g id='Main_Node' dataName='Main Node'>
                <g
                  id='Hobbies-3'
                  dataName='Hobbies'
                  transform='translate(-6212 -740)'
                >
                  <g
                    id='Rectangle_17520-18'
                    dataName='Rectangle 17520'
                    transform='translate(6886 898)'
                    fill='#474747'
                    stroke='#000'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <rect width='143' height='263' rx='5' stroke='none' />
                    <rect
                      x='0.5'
                      y='0.5'
                      width='142'
                      height='262'
                      rx='4.5'
                      fill='none'
                    />
                  </g>
                  <g
                    id='Rectangle_17521-18'
                    dataName='Rectangle 17521'
                    transform='translate(6887 899)'
                    fill='#2c8a5d'
                    stroke='#355947'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <path
                      d='M5,0H136a5,5,0,0,1,5,5V20a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V5A5,5,0,0,1,5,0Z'
                      stroke='none'
                    />
                    <path
                      d='M5,.5H136A4.5,4.5,0,0,1,140.5,5V19a.5.5,0,0,1-.5.5H1A.5.5,0,0,1,.5,19V5A4.5,4.5,0,0,1,5,.5Z'
                      fill='none'
                    />
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6335, 898)'
                    filter='url(#Hobbies)'
                  >
                    <text
                      id='Hobbies-4'
                      dataName='Hobbies'
                      transform='translate(575 15)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Hobbies
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6335, 898)'
                    filter='url(#Person)'
                  >
                    <text
                      id='Person-3'
                      dataName='Person'
                      transform='translate(566 40)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Person
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6335, 898)'
                    filter='url(#Normal-4)'
                  >
                    <text
                      transform='translate(566 250)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Normal
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6335, 898)'
                    filter='url(#Piano)'
                  >
                    <text
                      transform='translate(674 61)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-30.591' y='0'>
                        Piano
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6335, 898)'
                    filter='url(#Music)'
                  >
                    <text
                      transform='translate(674 82)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-31.636' y='0'>
                        Music
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6335, 898)'
                    filter='url(#Explore)'
                  >
                    <text
                      transform='translate(674 145)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-39.017' y='0'>
                        Explore
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6335, 898)'
                    filter='url(#Movie)'
                  >
                    <text
                      transform='translate(674 103)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-32.208' y='0'>
                        Movie
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6335, 898)'
                    filter='url(#Travel)'
                  >
                    <text
                      transform='translate(674 166)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-33.187' y='0'>
                        Travel
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6335, 898)'
                    filter='url(#Sing_Play-2)'
                  >
                    <text
                      transform='translate(674 208)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-60.346' y='0'>
                        Sing &amp; Play
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6335, 898)'
                    filter='url(#Design)'
                  >
                    <text
                      transform='translate(674 124)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-37.521' y='0'>
                        Design
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6335, 898)'
                    filter='url(#Self-Development)'
                  >
                    <text
                      transform='translate(674 187)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-99.627' y='0'>
                        Self-Development
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6335, 898)'
                    filter='url(#Coffee)'
                  >
                    <text
                      transform='translate(674 229)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-36.41' y='0'>
                        Coffee
                      </tspan>
                    </text>
                  </g>
                  <path
                    d='M4,0,8,7H0Z'
                    transform='translate(6904 913) rotate(180)'
                    fill='#fff'
                  />
                  <g
                    transform='translate(6882 929)'
                    fill='#6363c7'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    transform='translate(6882 1139)'
                    fill='#6363c7'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    transform='translate(7023 950)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    transform='translate(7023 971)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    transform='translate(7023 1034)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    transform='translate(7023 992)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    transform='translate(7023 1055)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    transform='translate(7023 1097)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    transform='translate(7023 1013)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    transform='translate(7023 1076)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    transform='translate(7023 1118)'
                    fill='#a1a1a1'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                </g>
                <path
                  d='M4490.02,2527.09c69.333,0,110.081-52.75,176.038-52.75'
                  transform='translate(-3991 -2280)'
                  fill='none'
                  stroke='#6f5eb2'
                  strokeWidth='2'
                  opacity='0.64'
                />
                <path
                  d='M4259.771,2578.933c36,0,45.078,122.336,89.281,122.336'
                  transform='translate(-3991 -2280)'
                  fill='none'
                  stroke='#4b4076'
                  strokeWidth='2'
                />
                <g transform='translate(-7736 -692)'>
                  <g
                    transform='translate(8093 881)'
                    fill='#474747'
                    stroke='#000'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <rect width='143' height='249' rx='5' stroke='none' />
                    <rect
                      x='0.5'
                      y='0.5'
                      width='142'
                      height='248'
                      rx='4.5'
                      fill='none'
                    />
                  </g>
                  <g
                    transform='translate(8094 882)'
                    fill='#9e343e'
                    stroke='#8c373e'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <path
                      d='M5,0H136a5,5,0,0,1,5,5V20a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V5A5,5,0,0,1,5,0Z'
                      stroke='none'
                    />
                    <path
                      d='M5,.5H136A4.5,4.5,0,0,1,140.5,5V19a.5.5,0,0,1-.5.5H1A.5.5,0,0,1,.5,19V5A4.5,4.5,0,0,1,5,.5Z'
                      fill='none'
                    />
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 7859, 850)'
                    filter='url(#About_Me)'
                  >
                    <text
                      transform='translate(258 46)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        About Me
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 7859, 850)'
                    filter='url(#Export)'
                  >
                    <text
                      transform='translate(357 71)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-33.495' y='0'>
                        Export
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 7859, 850)'
                    filter='url(#Hobbies-2)'
                  >
                    <text
                      transform='translate(357 93)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-44.792' y='0'>
                        Hobbies
                      </tspan>
                    </text>
                  </g>
                  <path
                    d='M4,0,8,7H0Z'
                    transform='translate(8111 896) rotate(180)'
                    fill='#fff'
                  />
                  <g
                    transform='translate(8230 912)'
                    fill='#c7c729'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    transform='translate(8230 934)'
                    fill='#6363c7'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    transform='translate(8089 1040)'
                    fill='#c7c729'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g id='Group_3462-2' transform='translate(866 5)'>
                    <g
                      transform='matrix(1, 0, 0, 1, 6993, 845)'
                      filter='url(#Rectangle_17522-40)'
                    >
                      <g
                        transform='translate(245 110)'
                        fill='#595959'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6993, 845)'
                      filter='url(#Age)'
                    >
                      <text
                        transform='translate(261 124)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Age
                        </tspan>
                      </text>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 6993, 845)'
                      filter='url(#_24)'
                    >
                      <text
                        transform='translate(350 124)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='-13.244' y='0'>
                          24
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <rect
                    width='54'
                    height='19'
                    rx='2'
                    transform='translate(8170 1036)'
                    fill='#7341ff'
                  />
                  <g
                    transform='matrix(1, 0, 0, 1, 7859, 850)'
                    filter='url(#Favorite)'
                  >
                    <text
                      transform='translate(249 199)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Favorite
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 7859, 850)'
                    filter='url(#Rectangle_17523)'
                  >
                    <g
                      transform='translate(248 138)'
                      fill='#fff'
                      stroke='#404040'
                      strokeWidth='1'
                    >
                      <rect width='14' height='14' rx='3' stroke='none' />
                      <rect
                        x='0.5'
                        y='0.5'
                        width='13'
                        height='13'
                        rx='2.5'
                        fill='none'
                      />
                    </g>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 7859, 850)'
                    filter='url(#Rectangle_17524)'
                  >
                    <g
                      transform='translate(248 163)'
                      fill='#595959'
                      stroke='#404040'
                      strokeWidth='1'
                    >
                      <rect width='14' height='14' rx='3' stroke='none' />
                      <rect
                        x='0.5'
                        y='0.5'
                        width='13'
                        height='13'
                        rx='2.5'
                        fill='none'
                      />
                    </g>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 7859, 850)'
                    filter='url(#Jirayu_Ninlapun)'
                  >
                    <text
                      transform='translate(270 149)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Jirayu Ninlapun
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 7859, 850)'
                    filter='url(#Jiraa_Ninpn)'
                  >
                    <text
                      transform='translate(270 174)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Jiraa Ninpn
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 7859, 850)'
                    filter='url(#Input-5)'
                  >
                    <text
                      transform='translate(249 267)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Input
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 7859, 850)'
                    filter='url(#Soft_Skills-2)'
                  >
                    <text
                      transform='translate(357 225)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-50.039' y='0'>
                        Soft Skills
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 7859, 850)'
                    filter='url(#Hard_Skill)'
                  >
                    <text
                      transform='translate(357 246)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-49.764' y='0'>
                        Hard Skill
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='translate(8089 1108)'
                    fill='#6363c7'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    transform='translate(8230 1066)'
                    fill='#2c8a5d'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    transform='translate(8230 1087)'
                    fill='#2c8a5d'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                </g>
                <g id='Node_Person' transform='translate(-6759 -635)'>
                  <g
                    transform='translate(6886 898)'
                    fill='#474747'
                    stroke='#000'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <rect width='143' height='109' rx='5' stroke='none' />
                    <rect
                      x='0.5'
                      y='0.5'
                      width='142'
                      height='108'
                      rx='4.5'
                      fill='none'
                    />
                  </g>
                  <g
                    transform='translate(6887 899)'
                    fill='#6f5eb2'
                    stroke='#645599'
                    strokeWidth='1'
                    opacity='0.8'
                  >
                    <path
                      d='M5,0H136a5,5,0,0,1,5,5V20a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V5A5,5,0,0,1,5,0Z'
                      stroke='none'
                    />
                    <path
                      d='M5,.5H136A4.5,4.5,0,0,1,140.5,5V19a.5.5,0,0,1-.5.5H1A.5.5,0,0,1,.5,19V5A4.5,4.5,0,0,1,5,.5Z'
                      fill='none'
                    />
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6882, 793)'
                    filter='url(#Person-2)'
                  >
                    <text
                      transform='translate(28 120)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Person
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6882, 793)'
                    filter='url(#Output-2)'
                  >
                    <text
                      transform='translate(127 145)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='-38.17' y='0'>
                        Output
                      </tspan>
                    </text>
                  </g>
                  <g
                    transform='matrix(1, 0, 0, 1, 6882, 793)'
                    filter='url(#Database)'
                  >
                    <text
                      transform='translate(19 201)'
                      fill='#fff'
                      fontSize='11'
                      fontFamily='Poppins-Regular, Poppins'
                    >
                      <tspan x='0' y='0'>
                        Database
                      </tspan>
                    </text>
                  </g>
                  <path
                    d='M4,0,8,7H0Z'
                    transform='translate(6904 913) rotate(180)'
                    fill='#fff'
                  />
                  <g
                    transform='translate(7023 929)'
                    fill='#c7c729'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g
                    transform='translate(6882 985)'
                    fill='#6363c7'
                    stroke='#050506'
                    strokeWidth='1'
                  >
                    <circle cx='5' cy='5' r='5' stroke='none' />
                    <circle cx='5' cy='5' r='4.5' fill='none' />
                  </g>
                  <g transform='translate(-341)'>
                    <g
                      transform='matrix(1, 0, 0, 1, 7223, 793)'
                      filter='url(#Rectangle_17522-41)'
                    >
                      <g
                        transform='translate(15 162)'
                        fill='#2c2c2c'
                        stroke='#404040'
                        strokeWidth='1'
                      >
                        <rect width='121' height='20' rx='3' stroke='none' />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='120'
                          height='19'
                          rx='2.5'
                          fill='none'
                        />
                      </g>
                    </g>
                    <g
                      transform='matrix(1, 0, 0, 1, 7223, 793)'
                      filter='url(#Jirayu_Ninlapun-2)'
                    >
                      <text
                        transform='translate(23 176)'
                        fill='#fff'
                        fontSize='11'
                        fontFamily='Poppins-Regular, Poppins'
                      >
                        <tspan x='0' y='0'>
                          Jirayu Ninlapun
                        </tspan>
                      </text>
                    </g>
                    <path
                      d='M226.159,149.1l-3.289-3.289,3.289-3.289'
                      transform='translate(7206.294 1190.099) rotate(-90)'
                      fill='none'
                      stroke='#a3a3a3'
                      strokeMiterlimit='10'
                      strokeWidth='1'
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
          {/* </TransformComponent> */}
          {/* </TransformWrapper> */}
        </div>
      </div>
    </>
  )
}

export default AboutNode
