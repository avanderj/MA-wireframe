import svgPaths from "./svg-g0f6b15ypt";
import imgRectangle134 from "../../assets/ece298d0ec2c16f10310d45724b276a6035cb503.png";

function MainNav() {
  return (
    <div
      className="[grid-area:1_/_1] h-[82px] ml-0 mt-0 relative w-[1440px]"
      data-name="Main Nav"
    >
      <div className="absolute bg-white inset-0" />
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <MainNav />
    </div>
  );
}

function Avatar() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="avatar"
    >
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[36px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 36 36"
        >
          <circle
            cx="18"
            cy="18"
            fill="var(--fill-0, #D9D9D9)"
            id="Ellipse 1"
            r="18"
          />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center ml-[18px] mt-[18.5px] not-italic relative text-[16px] text-black text-center text-nowrap translate-x-[-50%] translate-y-[-50%] uppercase">
        <p className="leading-[normal]">CG</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-[1187px] top-[23px]">
      <Avatar />
      <p className="capitalize font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[15px] text-black text-nowrap">
        My ID
      </p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[1187px] top-[23px]">
      <Frame />
    </div>
  );
}

function MainNav1() {
  return (
    <div
      className="absolute bg-white content-stretch flex gap-[10px] items-center left-0 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.11)] top-0"
      data-name="Main-nav"
    >
      <Group10 />
      <Group11 />
    </div>
  );
}

function Search() {
  return (
    <div
      className="absolute left-[128px] size-[12px] top-[109px]"
      data-name="search"
    >
      <div className="absolute inset-[0_0_0_-0.01%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 12.0007 12.0002"
        >
          <g id="search">
            <rect
              fill="white"
              height="12"
              transform="translate(0.000673412)"
              width="12"
            />
            <path
              d={svgPaths.p2c71b800}
              fill="var(--fill-0, #231F20)"
              id="Vector"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[116px] top-[100px]">
      <div className="absolute bg-white border border-[#d9d9d9] border-solid h-[30px] left-[116px] top-[100px] w-[283px]" />
      <div className="absolute flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] left-[149px] not-italic text-[#878d96] text-[11px] text-nowrap top-[114.5px] translate-y-[-50%]">
        <p className="leading-[normal]">Search applications or systems</p>
      </div>
      <Search />
    </div>
  );
}

function BookmarkFill() {
  return (
    <div className="relative shrink-0 size-[9px]" data-name="bookmark-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 9 9"
      >
        <g clipPath="url(#clip0_1_1909)" id="bookmark-fill">
          <path
            d={svgPaths.p10a1bc00}
            fill="var(--fill-0, #231F20)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1909">
            <rect fill="white" height="9" width="9" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SaveButton() {
  return (
    <div
      className="absolute content-stretch flex gap-[2px] items-center left-[145px] top-px"
      data-name="save-button"
    >
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#231f20] text-[7px] text-nowrap tracking-[0.14px]">
        <p className="leading-[normal]">Saved</p>
      </div>
      <BookmarkFill />
    </div>
  );
}

function Frame7() {
  return (
    <div className="[grid-area:1_/_1] h-[19.52px] ml-[17px] mt-[11px] relative w-[171px]">
      <SaveButton />
    </div>
  );
}

function Frame161() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex gap-[3px] items-center justify-center ml-[133px] mt-[84px] px-[7px] py-[6px] relative">
      <div
        aria-hidden="true"
        className="absolute border border-[#231f20] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#535252] text-[12px] text-nowrap">
        <p className="leading-[normal]">{`Launch `}</p>
      </div>
      <div className="relative shrink-0 size-[6.579px]" data-name="Vector">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 6.57901 6.57901"
        >
          <g id="Vector">
            <mask fill="white" id="path-1-inside-1_1_1900">
              <path d={svgPaths.p66f7c00} />
            </mask>
            <path d={svgPaths.p66f7c00} fill="var(--fill-0, black)" />
            <path
              d={svgPaths.p702db00}
              fill="var(--stroke-0, #878D96)"
              mask="url(#path-1-inside-1_1_1900)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[122px] ml-0 mt-0 w-[206px]" />
      <Frame7 />
      <Frame161 />
    </div>
  );
}

function Frame3() {
  return <div className="h-[8px] shrink-0 w-0" />;
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center mb-[-8px] relative shrink-0">
      <Frame3 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="bg-[#efefef] content-stretch flex items-center justify-center px-[5px] py-[2px] relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[9px] text-black text-nowrap tracking-[0.54px]">
        <p className="leading-[normal]">SSO</p>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Frame85 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-black tracking-[0.24px] w-[130px]">
        <p className="leading-[normal]">Access Management</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame4 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[102px]">
      <Frame2 />
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[7px]" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 7 7"
      >
        <g id="Group">
          <path d={svgPaths.pbe71200} fill="var(--fill-0, black)" id="Vector" />
          <path
            d={svgPaths.p92cfdf0}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p25cd4c00}
            fill="var(--fill-0, black)"
            id="Vector_3"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0">
      <Group />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#818181] text-[10px] tracking-[0.2px] w-[130px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal] underline">
          Get info
        </p>
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start mb-[-8px] relative shrink-0">
      <Frame89 />
      <Frame47 />
      <Frame88 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] pt-0 px-0 relative shrink-0">
      <Frame8 />
      <Frame87 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame42 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-start justify-center left-[13px] top-[calc(50%-22px)] translate-y-[-50%]">
      <div className="relative shrink-0 size-[38px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgRectangle134}
        />
      </div>
      <Frame43 />
    </div>
  );
}

function AnnouncementCard() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] h-[122px] items-start relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.12)] shrink-0"
      data-name="Announcement-card"
    >
      <Group16 />
      <Frame44 />
    </div>
  );
}

function BookmarkFill1() {
  return (
    <div className="relative shrink-0 size-[9px]" data-name="bookmark-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 9 9"
      >
        <g clipPath="url(#clip0_1_1909)" id="bookmark-fill">
          <path
            d={svgPaths.p10a1bc00}
            fill="var(--fill-0, #231F20)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1909">
            <rect fill="white" height="9" width="9" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SaveButton1() {
  return (
    <div
      className="absolute content-stretch flex gap-[2px] items-center left-[145px] top-px"
      data-name="save-button"
    >
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#231f20] text-[7px] text-nowrap tracking-[0.14px]">
        <p className="leading-[normal]">Saved</p>
      </div>
      <BookmarkFill1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="[grid-area:1_/_1] h-[19.52px] ml-[17px] mt-[11px] relative w-[171px]">
      <SaveButton1 />
    </div>
  );
}

function Frame162() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex gap-[3px] items-center justify-center ml-[133px] mt-[84px] px-[7px] py-[6px] relative">
      <div
        aria-hidden="true"
        className="absolute border border-[#231f20] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#535252] text-[12px] text-nowrap">
        <p className="leading-[normal]">{`Launch `}</p>
      </div>
      <div className="relative shrink-0 size-[6.579px]" data-name="Vector">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 6.57901 6.57901"
        >
          <g id="Vector">
            <mask fill="white" id="path-1-inside-1_1_1900">
              <path d={svgPaths.p66f7c00} />
            </mask>
            <path d={svgPaths.p66f7c00} fill="var(--fill-0, black)" />
            <path
              d={svgPaths.p702db00}
              fill="var(--stroke-0, #878D96)"
              mask="url(#path-1-inside-1_1_1900)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[122px] ml-0 mt-0 w-[206px]" />
      <Frame9 />
      <Frame162 />
    </div>
  );
}

function Frame5() {
  return <div className="h-[8px] shrink-0 w-0" />;
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center mb-[-8px] relative shrink-0">
      <Frame5 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="bg-[#efefef] content-stretch flex items-center justify-center px-[5px] py-[2px] relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[9px] text-black text-nowrap tracking-[0.54px]">
        <p className="leading-[normal]">SSO</p>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Frame93 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-black tracking-[0.24px] w-[130px]">
        <p className="leading-[normal]">BearBuy</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame6 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[102px]">
      <Frame11 />
    </div>
  );
}

function Group1() {
  return (
    <div className="relative shrink-0 size-[7px]" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 7 7"
      >
        <g id="Group">
          <path d={svgPaths.pbe71200} fill="var(--fill-0, black)" id="Vector" />
          <path
            d={svgPaths.p92cfdf0}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p25cd4c00}
            fill="var(--fill-0, black)"
            id="Vector_3"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0">
      <Group1 />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#818181] text-[10px] tracking-[0.2px] w-[130px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal] underline">
          Get info
        </p>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start mb-[-8px] relative shrink-0">
      <Frame94 />
      <Frame48 />
      <Frame95 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] pt-0 px-0 relative shrink-0">
      <Frame10 />
      <Frame96 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame45 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-start justify-center left-[13px] top-[calc(50%-22px)] translate-y-[-50%]">
      <div className="relative shrink-0 size-[38px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgRectangle134}
        />
      </div>
      <Frame46 />
    </div>
  );
}

function AnnouncementCard1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] h-[122px] items-start relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.12)] shrink-0"
      data-name="Announcement-card"
    >
      <Group17 />
      <Frame49 />
    </div>
  );
}

function BookmarkFill2() {
  return (
    <div className="relative shrink-0 size-[9px]" data-name="bookmark-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 9 9"
      >
        <g clipPath="url(#clip0_1_1909)" id="bookmark-fill">
          <path
            d={svgPaths.p10a1bc00}
            fill="var(--fill-0, #231F20)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1909">
            <rect fill="white" height="9" width="9" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SaveButton2() {
  return (
    <div
      className="absolute content-stretch flex gap-[2px] items-center left-[145px] top-px"
      data-name="save-button"
    >
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#231f20] text-[7px] text-nowrap tracking-[0.14px]">
        <p className="leading-[normal]">Saved</p>
      </div>
      <BookmarkFill2 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="[grid-area:1_/_1] h-[19.52px] ml-[17px] mt-[11px] relative w-[171px]">
      <SaveButton2 />
    </div>
  );
}

function Frame163() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex gap-[3px] items-center justify-center ml-[133px] mt-[84px] px-[7px] py-[6px] relative">
      <div
        aria-hidden="true"
        className="absolute border border-[#231f20] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#535252] text-[12px] text-nowrap">
        <p className="leading-[normal]">{`Launch `}</p>
      </div>
      <div className="relative shrink-0 size-[6.579px]" data-name="Vector">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 6.57901 6.57901"
        >
          <g id="Vector">
            <mask fill="white" id="path-1-inside-1_1_1900">
              <path d={svgPaths.p66f7c00} />
            </mask>
            <path d={svgPaths.p66f7c00} fill="var(--fill-0, black)" />
            <path
              d={svgPaths.p702db00}
              fill="var(--stroke-0, #878D96)"
              mask="url(#path-1-inside-1_1_1900)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[122px] ml-0 mt-0 w-[206px]" />
      <Frame12 />
      <Frame163 />
    </div>
  );
}

function Frame13() {
  return <div className="h-[8px] shrink-0 w-0" />;
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center mb-[-8px] relative shrink-0">
      <Frame13 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="bg-[#efefef] content-stretch flex items-center justify-center px-[5px] py-[2px] relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[9px] text-black text-nowrap tracking-[0.54px]">
        <p className="leading-[normal]">SSO</p>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Frame97 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-black tracking-[0.24px] w-[130px]">
        <p className="leading-[normal]">Box</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame15 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[102px]">
      <Frame16 />
    </div>
  );
}

function Group2() {
  return (
    <div className="relative shrink-0 size-[7px]" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 7 7"
      >
        <g id="Group">
          <path d={svgPaths.pbe71200} fill="var(--fill-0, black)" id="Vector" />
          <path
            d={svgPaths.p92cfdf0}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p25cd4c00}
            fill="var(--fill-0, black)"
            id="Vector_3"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0">
      <Group2 />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#818181] text-[10px] tracking-[0.2px] w-[130px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal] underline">
          Get info
        </p>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start mb-[-8px] relative shrink-0">
      <Frame98 />
      <Frame51 />
      <Frame99 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] pt-0 px-0 relative shrink-0">
      <Frame14 />
      <Frame100 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame52 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-start justify-center left-[13px] top-[calc(50%-22px)] translate-y-[-50%]">
      <div className="relative shrink-0 size-[38px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgRectangle134}
        />
      </div>
      <Frame53 />
    </div>
  );
}

function AnnouncementCard2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] h-[122px] items-start relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.12)] shrink-0"
      data-name="Announcement-card"
    >
      <Group18 />
      <Frame54 />
    </div>
  );
}

function BookmarkFill3() {
  return (
    <div className="relative shrink-0 size-[9px]" data-name="bookmark-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 9 9"
      >
        <g clipPath="url(#clip0_1_1909)" id="bookmark-fill">
          <path
            d={svgPaths.p10a1bc00}
            fill="var(--fill-0, #231F20)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1909">
            <rect fill="white" height="9" width="9" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SaveButton3() {
  return (
    <div
      className="absolute content-stretch flex gap-[2px] items-center left-[145px] top-px"
      data-name="save-button"
    >
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#231f20] text-[7px] text-nowrap tracking-[0.14px]">
        <p className="leading-[normal]">Saved</p>
      </div>
      <BookmarkFill3 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="[grid-area:1_/_1] h-[19.52px] ml-[17px] mt-[11px] relative w-[171px]">
      <SaveButton3 />
    </div>
  );
}

function Frame164() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex gap-[3px] items-center justify-center ml-[133px] mt-[84px] px-[7px] py-[6px] relative">
      <div
        aria-hidden="true"
        className="absolute border border-[#231f20] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#535252] text-[12px] text-nowrap">
        <p className="leading-[normal]">{`Launch `}</p>
      </div>
      <div className="relative shrink-0 size-[6.579px]" data-name="Vector">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 6.57901 6.57901"
        >
          <g id="Vector">
            <mask fill="white" id="path-1-inside-1_1_1900">
              <path d={svgPaths.p66f7c00} />
            </mask>
            <path d={svgPaths.p66f7c00} fill="var(--fill-0, black)" />
            <path
              d={svgPaths.p702db00}
              fill="var(--stroke-0, #878D96)"
              mask="url(#path-1-inside-1_1_1900)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[122px] ml-0 mt-0 w-[206px]" />
      <Frame17 />
      <Frame164 />
    </div>
  );
}

function Frame18() {
  return <div className="h-[8px] shrink-0 w-0" />;
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center mb-[-8px] relative shrink-0">
      <Frame18 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="bg-[#efefef] content-stretch flex items-center justify-center px-[5px] py-[2px] relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[9px] text-black text-nowrap tracking-[0.54px]">
        <p className="leading-[normal]">SSO</p>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Frame101 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-black tracking-[0.24px] w-[130px]">
        <p className="leading-[normal]">DocuSign - UCSF</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame20 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[102px]">
      <Frame21 />
    </div>
  );
}

function Group3() {
  return (
    <div className="relative shrink-0 size-[7px]" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 7 7"
      >
        <g id="Group">
          <path d={svgPaths.pbe71200} fill="var(--fill-0, black)" id="Vector" />
          <path
            d={svgPaths.p92cfdf0}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p25cd4c00}
            fill="var(--fill-0, black)"
            id="Vector_3"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0">
      <Group3 />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#818181] text-[10px] tracking-[0.2px] w-[130px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal] underline">
          Get info
        </p>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start mb-[-8px] relative shrink-0">
      <Frame102 />
      <Frame55 />
      <Frame103 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] pt-0 px-0 relative shrink-0">
      <Frame19 />
      <Frame104 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame56 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-start justify-center left-[13px] top-[calc(50%-22px)] translate-y-[-50%]">
      <div className="relative shrink-0 size-[38px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgRectangle134}
        />
      </div>
      <Frame57 />
    </div>
  );
}

function AnnouncementCard3() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] h-[122px] items-start relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.12)] shrink-0"
      data-name="Announcement-card"
    >
      <Group19 />
      <Frame58 />
    </div>
  );
}

function BookmarkFill4() {
  return (
    <div className="relative shrink-0 size-[9px]" data-name="bookmark-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 9 9"
      >
        <g clipPath="url(#clip0_1_1909)" id="bookmark-fill">
          <path
            d={svgPaths.p10a1bc00}
            fill="var(--fill-0, #231F20)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1909">
            <rect fill="white" height="9" width="9" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SaveButton4() {
  return (
    <div
      className="absolute content-stretch flex gap-[2px] items-center left-[145px] top-px"
      data-name="save-button"
    >
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#231f20] text-[7px] text-nowrap tracking-[0.14px]">
        <p className="leading-[normal]">Saved</p>
      </div>
      <BookmarkFill4 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="[grid-area:1_/_1] h-[19.52px] ml-[17px] mt-[11px] relative w-[171px]">
      <SaveButton4 />
    </div>
  );
}

function Frame165() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex gap-[3px] items-center justify-center ml-[133px] mt-[84px] px-[7px] py-[6px] relative">
      <div
        aria-hidden="true"
        className="absolute border border-[#231f20] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#535252] text-[12px] text-nowrap">
        <p className="leading-[normal]">{`Launch `}</p>
      </div>
      <div className="relative shrink-0 size-[6.579px]" data-name="Vector">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 6.57901 6.57901"
        >
          <g id="Vector">
            <mask fill="white" id="path-1-inside-1_1_1900">
              <path d={svgPaths.p66f7c00} />
            </mask>
            <path d={svgPaths.p66f7c00} fill="var(--fill-0, black)" />
            <path
              d={svgPaths.p702db00}
              fill="var(--stroke-0, #878D96)"
              mask="url(#path-1-inside-1_1_1900)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[122px] ml-0 mt-0 w-[206px]" />
      <Frame22 />
      <Frame165 />
    </div>
  );
}

function Frame23() {
  return <div className="h-[8px] shrink-0 w-0" />;
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center mb-[-8px] relative shrink-0">
      <Frame23 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="bg-[#efefef] content-stretch flex items-center justify-center px-[5px] py-[2px] relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[9px] text-black text-nowrap tracking-[0.54px]">
        <p className="leading-[normal]">SSO</p>
      </div>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Frame105 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-black tracking-[0.24px] w-[130px]">
        <p className="leading-[normal]">Email in the Cloud - UCSF Email</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame25 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[102px]">
      <Frame26 />
    </div>
  );
}

function Group4() {
  return (
    <div className="relative shrink-0 size-[7px]" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 7 7"
      >
        <g id="Group">
          <path d={svgPaths.pbe71200} fill="var(--fill-0, black)" id="Vector" />
          <path
            d={svgPaths.p92cfdf0}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p25cd4c00}
            fill="var(--fill-0, black)"
            id="Vector_3"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0">
      <Group4 />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#818181] text-[10px] tracking-[0.2px] w-[130px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal] underline">
          Get info
        </p>
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start mb-[-8px] relative shrink-0">
      <Frame106 />
      <Frame59 />
      <Frame107 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] pt-0 px-0 relative shrink-0">
      <Frame24 />
      <Frame108 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame60 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-start justify-center left-[13px] top-[calc(50%-22px)] translate-y-[-50%]">
      <div className="relative shrink-0 size-[38px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgRectangle134}
        />
      </div>
      <Frame61 />
    </div>
  );
}

function AnnouncementCard4() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] h-[122px] items-start relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.12)] shrink-0"
      data-name="Announcement-card"
    >
      <Group20 />
      <Frame62 />
    </div>
  );
}

function BookmarkFill5() {
  return (
    <div className="relative shrink-0 size-[9px]" data-name="bookmark-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 9 9"
      >
        <g clipPath="url(#clip0_1_1909)" id="bookmark-fill">
          <path
            d={svgPaths.p10a1bc00}
            fill="var(--fill-0, #231F20)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1909">
            <rect fill="white" height="9" width="9" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SaveButton5() {
  return (
    <div
      className="absolute content-stretch flex gap-[2px] items-center left-[145px] top-px"
      data-name="save-button"
    >
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#231f20] text-[7px] text-nowrap tracking-[0.14px]">
        <p className="leading-[normal]">Saved</p>
      </div>
      <BookmarkFill5 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="[grid-area:1_/_1] h-[19.52px] ml-[17px] mt-[11px] relative w-[171px]">
      <SaveButton5 />
    </div>
  );
}

function Frame166() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex gap-[3px] items-center justify-center ml-[133px] mt-[84px] px-[7px] py-[6px] relative">
      <div
        aria-hidden="true"
        className="absolute border border-[#231f20] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#535252] text-[12px] text-nowrap">
        <p className="leading-[normal]">{`Launch `}</p>
      </div>
      <div className="relative shrink-0 size-[6.579px]" data-name="Vector">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 6.57901 6.57901"
        >
          <g id="Vector">
            <mask fill="white" id="path-1-inside-1_1_1900">
              <path d={svgPaths.p66f7c00} />
            </mask>
            <path d={svgPaths.p66f7c00} fill="var(--fill-0, black)" />
            <path
              d={svgPaths.p702db00}
              fill="var(--stroke-0, #878D96)"
              mask="url(#path-1-inside-1_1_1900)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[122px] ml-0 mt-0 w-[206px]" />
      <Frame27 />
      <Frame166 />
    </div>
  );
}

function Frame28() {
  return <div className="h-[8px] shrink-0 w-0" />;
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center mb-[-8px] relative shrink-0">
      <Frame28 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="bg-[#efefef] content-stretch flex items-center justify-center px-[5px] py-[2px] relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[9px] text-black text-nowrap tracking-[0.54px]">
        <p className="leading-[normal]">SSO</p>
      </div>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Frame109 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-black tracking-[0.24px] w-[130px]">
        <p className="leading-[normal]">MyExpense</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame30 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[102px]">
      <Frame31 />
    </div>
  );
}

function Group5() {
  return (
    <div className="relative shrink-0 size-[7px]" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 7 7"
      >
        <g id="Group">
          <path d={svgPaths.pbe71200} fill="var(--fill-0, black)" id="Vector" />
          <path
            d={svgPaths.p92cfdf0}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p25cd4c00}
            fill="var(--fill-0, black)"
            id="Vector_3"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0">
      <Group5 />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#818181] text-[10px] tracking-[0.2px] w-[130px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal] underline">
          Get info
        </p>
      </div>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start mb-[-8px] relative shrink-0">
      <Frame110 />
      <Frame63 />
      <Frame111 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] pt-0 px-0 relative shrink-0">
      <Frame29 />
      <Frame112 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame64 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-start justify-center left-[13px] top-[calc(50%-22px)] translate-y-[-50%]">
      <div className="relative shrink-0 size-[38px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgRectangle134}
        />
      </div>
      <Frame65 />
    </div>
  );
}

function AnnouncementCard5() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] h-[122px] items-start relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.12)] shrink-0"
      data-name="Announcement-card"
    >
      <Group21 />
      <Frame66 />
    </div>
  );
}

function BookmarkFill6() {
  return (
    <div className="relative shrink-0 size-[9px]" data-name="bookmark-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 9 9"
      >
        <g clipPath="url(#clip0_1_1909)" id="bookmark-fill">
          <path
            d={svgPaths.p10a1bc00}
            fill="var(--fill-0, #231F20)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1909">
            <rect fill="white" height="9" width="9" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SaveButton6() {
  return (
    <div
      className="absolute content-stretch flex gap-[2px] items-center left-[145px] top-px"
      data-name="save-button"
    >
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#231f20] text-[7px] text-nowrap tracking-[0.14px]">
        <p className="leading-[normal]">Saved</p>
      </div>
      <BookmarkFill6 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="[grid-area:1_/_1] h-[19.52px] ml-[17px] mt-[11px] relative w-[171px]">
      <SaveButton6 />
    </div>
  );
}

function Frame167() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex gap-[3px] items-center justify-center ml-[133px] mt-[84px] px-[7px] py-[6px] relative">
      <div
        aria-hidden="true"
        className="absolute border border-[#231f20] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#535252] text-[12px] text-nowrap">
        <p className="leading-[normal]">{`Launch `}</p>
      </div>
      <div className="relative shrink-0 size-[6.579px]" data-name="Vector">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 6.57901 6.57901"
        >
          <g id="Vector">
            <mask fill="white" id="path-1-inside-1_1_1900">
              <path d={svgPaths.p66f7c00} />
            </mask>
            <path d={svgPaths.p66f7c00} fill="var(--fill-0, black)" />
            <path
              d={svgPaths.p702db00}
              fill="var(--stroke-0, #878D96)"
              mask="url(#path-1-inside-1_1_1900)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[122px] ml-0 mt-0 w-[206px]" />
      <Frame33 />
      <Frame167 />
    </div>
  );
}

function Frame34() {
  return <div className="h-[8px] shrink-0 w-0" />;
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center mb-[-8px] relative shrink-0">
      <Frame34 />
    </div>
  );
}

function Frame113() {
  return (
    <div className="bg-[#efefef] content-stretch flex items-center justify-center px-[5px] py-[2px] relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[9px] text-black text-nowrap tracking-[0.54px]">
        <p className="leading-[normal]">SSO</p>
      </div>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Frame113 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-black tracking-[0.24px] w-[130px]">
        <p className="leading-[normal]">MyPPM</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame38 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[102px]">
      <Frame39 />
    </div>
  );
}

function Group6() {
  return (
    <div className="relative shrink-0 size-[7px]" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 7 7"
      >
        <g id="Group">
          <path d={svgPaths.pbe71200} fill="var(--fill-0, black)" id="Vector" />
          <path
            d={svgPaths.p92cfdf0}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p25cd4c00}
            fill="var(--fill-0, black)"
            id="Vector_3"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0">
      <Group6 />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#818181] text-[10px] tracking-[0.2px] w-[130px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal] underline">
          Get info
        </p>
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start mb-[-8px] relative shrink-0">
      <Frame114 />
      <Frame67 />
      <Frame115 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] pt-0 px-0 relative shrink-0">
      <Frame37 />
      <Frame116 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame68 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-start justify-center left-[13px] top-[calc(50%-22px)] translate-y-[-50%]">
      <div className="relative shrink-0 size-[38px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgRectangle134}
        />
      </div>
      <Frame69 />
    </div>
  );
}

function AnnouncementCard6() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] h-[122px] items-start relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.12)] shrink-0"
      data-name="Announcement-card"
    >
      <Group22 />
      <Frame70 />
    </div>
  );
}

function BookmarkFill7() {
  return (
    <div className="relative shrink-0 size-[9px]" data-name="bookmark-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 9 9"
      >
        <g clipPath="url(#clip0_1_1909)" id="bookmark-fill">
          <path
            d={svgPaths.p10a1bc00}
            fill="var(--fill-0, #231F20)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1909">
            <rect fill="white" height="9" width="9" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SaveButton7() {
  return (
    <div
      className="absolute content-stretch flex gap-[2px] items-center left-[145px] top-px"
      data-name="save-button"
    >
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#231f20] text-[7px] text-nowrap tracking-[0.14px]">
        <p className="leading-[normal]">Saved</p>
      </div>
      <BookmarkFill7 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="[grid-area:1_/_1] h-[19.52px] ml-[17px] mt-[11px] relative w-[171px]">
      <SaveButton7 />
    </div>
  );
}

function Frame168() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex gap-[3px] items-center justify-center ml-[133px] mt-[84px] px-[7px] py-[6px] relative">
      <div
        aria-hidden="true"
        className="absolute border border-[#231f20] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#535252] text-[12px] text-nowrap">
        <p className="leading-[normal]">{`Launch `}</p>
      </div>
      <div className="relative shrink-0 size-[6.579px]" data-name="Vector">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 6.57901 6.57901"
        >
          <g id="Vector">
            <mask fill="white" id="path-1-inside-1_1_1900">
              <path d={svgPaths.p66f7c00} />
            </mask>
            <path d={svgPaths.p66f7c00} fill="var(--fill-0, black)" />
            <path
              d={svgPaths.p702db00}
              fill="var(--stroke-0, #878D96)"
              mask="url(#path-1-inside-1_1_1900)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group23() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[122px] ml-0 mt-0 w-[206px]" />
      <Frame40 />
      <Frame168 />
    </div>
  );
}

function Frame41() {
  return <div className="h-[8px] shrink-0 w-0" />;
}

function Frame71() {
  return (
    <div className="content-stretch flex items-center mb-[-8px] relative shrink-0">
      <Frame41 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="bg-[#efefef] content-stretch flex items-center justify-center px-[5px] py-[2px] relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[9px] text-black text-nowrap tracking-[0.54px]">
        <p className="leading-[normal]">MFA</p>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="bg-[#efefef] content-stretch flex items-center justify-center px-[5px] py-[2px] relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[9px] text-black text-nowrap tracking-[0.54px]">
        <p className="leading-[normal]">SSO</p>
      </div>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Frame117 />
      <Frame86 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-black tracking-[0.24px] w-[130px]">
        <p className="leading-[normal]">MyTime</p>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame72 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[102px]">
      <Frame73 />
    </div>
  );
}

function Group7() {
  return (
    <div className="relative shrink-0 size-[7px]" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 7 7"
      >
        <g id="Group">
          <path d={svgPaths.pbe71200} fill="var(--fill-0, black)" id="Vector" />
          <path
            d={svgPaths.p92cfdf0}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p25cd4c00}
            fill="var(--fill-0, black)"
            id="Vector_3"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0">
      <Group7 />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#818181] text-[10px] tracking-[0.2px] w-[130px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal] underline">
          Get info
        </p>
      </div>
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start mb-[-8px] relative shrink-0">
      <Frame118 />
      <Frame74 />
      <Frame119 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] pt-0 px-0 relative shrink-0">
      <Frame71 />
      <Frame120 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame75 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-start justify-center left-[13px] top-[calc(50%-22px)] translate-y-[-50%]">
      <div className="relative shrink-0 size-[38px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgRectangle134}
        />
      </div>
      <Frame76 />
    </div>
  );
}

function AnnouncementCard7() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] h-[122px] items-start relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.12)] shrink-0"
      data-name="Announcement-card"
    >
      <Group23 />
      <Frame77 />
    </div>
  );
}

function BookmarkFill8() {
  return (
    <div className="relative shrink-0 size-[9px]" data-name="bookmark-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 9 9"
      >
        <g clipPath="url(#clip0_1_1909)" id="bookmark-fill">
          <path
            d={svgPaths.p10a1bc00}
            fill="var(--fill-0, #231F20)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1909">
            <rect fill="white" height="9" width="9" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SaveButton8() {
  return (
    <div
      className="absolute content-stretch flex gap-[2px] items-center left-[145px] top-px"
      data-name="save-button"
    >
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#231f20] text-[7px] text-nowrap tracking-[0.14px]">
        <p className="leading-[normal]">Saved</p>
      </div>
      <BookmarkFill8 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="[grid-area:1_/_1] h-[19.52px] ml-[17px] mt-[11px] relative w-[171px]">
      <SaveButton8 />
    </div>
  );
}

function Frame169() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex gap-[3px] items-center justify-center ml-[133px] mt-[84px] px-[7px] py-[6px] relative">
      <div
        aria-hidden="true"
        className="absolute border border-[#231f20] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#535252] text-[12px] text-nowrap">
        <p className="leading-[normal]">{`Launch `}</p>
      </div>
      <div className="relative shrink-0 size-[6.579px]" data-name="Vector">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 6.57901 6.57901"
        >
          <g id="Vector">
            <mask fill="white" id="path-1-inside-1_1_1900">
              <path d={svgPaths.p66f7c00} />
            </mask>
            <path d={svgPaths.p66f7c00} fill="var(--fill-0, black)" />
            <path
              d={svgPaths.p702db00}
              fill="var(--stroke-0, #878D96)"
              mask="url(#path-1-inside-1_1_1900)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[122px] ml-0 mt-0 w-[206px]" />
      <Frame78 />
      <Frame169 />
    </div>
  );
}

function Frame79() {
  return <div className="h-[8px] shrink-0 w-0" />;
}

function Frame80() {
  return (
    <div className="content-stretch flex items-center mb-[-8px] relative shrink-0">
      <Frame79 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="bg-[#efefef] content-stretch flex items-center justify-center px-[5px] py-[2px] relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[9px] text-black text-nowrap tracking-[0.54px]">
        <p className="leading-[normal]">SSO</p>
      </div>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Frame121 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-black tracking-[0.24px] w-[130px]">
        <p className="leading-[normal]">UC Learning Center</p>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame81 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[102px]">
      <Frame82 />
    </div>
  );
}

function Group8() {
  return (
    <div className="relative shrink-0 size-[7px]" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 7 7"
      >
        <g id="Group">
          <path d={svgPaths.pbe71200} fill="var(--fill-0, black)" id="Vector" />
          <path
            d={svgPaths.p92cfdf0}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p25cd4c00}
            fill="var(--fill-0, black)"
            id="Vector_3"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0">
      <Group8 />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#818181] text-[10px] tracking-[0.2px] w-[130px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal] underline">
          Get info
        </p>
      </div>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start mb-[-8px] relative shrink-0">
      <Frame122 />
      <Frame83 />
      <Frame123 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] pt-0 px-0 relative shrink-0">
      <Frame80 />
      <Frame124 />
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame84 />
    </div>
  );
}

function Frame126() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-start justify-center left-[13px] top-[calc(50%-22px)] translate-y-[-50%]">
      <div className="relative shrink-0 size-[38px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgRectangle134}
        />
      </div>
      <Frame125 />
    </div>
  );
}

function AnnouncementCard8() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] h-[122px] items-start relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.12)] shrink-0"
      data-name="Announcement-card"
    >
      <Group24 />
      <Frame126 />
    </div>
  );
}

function BookmarkFill9() {
  return (
    <div className="relative shrink-0 size-[9px]" data-name="bookmark-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 9 9"
      >
        <g clipPath="url(#clip0_1_1909)" id="bookmark-fill">
          <path
            d={svgPaths.p10a1bc00}
            fill="var(--fill-0, #231F20)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1909">
            <rect fill="white" height="9" width="9" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SaveButton9() {
  return (
    <div
      className="absolute content-stretch flex gap-[2px] items-center left-[145px] top-px"
      data-name="save-button"
    >
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#231f20] text-[7px] text-nowrap tracking-[0.14px]">
        <p className="leading-[normal]">Saved</p>
      </div>
      <BookmarkFill9 />
    </div>
  );
}

function Frame127() {
  return (
    <div className="[grid-area:1_/_1] h-[19.52px] ml-[17px] mt-[11px] relative w-[171px]">
      <SaveButton9 />
    </div>
  );
}

function Frame170() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex gap-[3px] items-center justify-center ml-[133px] mt-[84px] px-[7px] py-[6px] relative">
      <div
        aria-hidden="true"
        className="absolute border border-[#231f20] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#535252] text-[12px] text-nowrap">
        <p className="leading-[normal]">{`Launch `}</p>
      </div>
      <div className="relative shrink-0 size-[6.579px]" data-name="Vector">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 6.57901 6.57901"
        >
          <g id="Vector">
            <mask fill="white" id="path-1-inside-1_1_1900">
              <path d={svgPaths.p66f7c00} />
            </mask>
            <path d={svgPaths.p66f7c00} fill="var(--fill-0, black)" />
            <path
              d={svgPaths.p702db00}
              fill="var(--stroke-0, #878D96)"
              mask="url(#path-1-inside-1_1_1900)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group25() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[122px] ml-0 mt-0 w-[206px]" />
      <Frame127 />
      <Frame170 />
    </div>
  );
}

function Frame128() {
  return <div className="h-[8px] shrink-0 w-0" />;
}

function Frame129() {
  return (
    <div className="content-stretch flex items-center mb-[-8px] relative shrink-0">
      <Frame128 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="bg-[#efefef] content-stretch flex items-center justify-center px-[5px] py-[2px] relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[9px] text-black text-nowrap tracking-[0.54px]">
        <p className="leading-[normal]">VPN</p>
      </div>
    </div>
  );
}

function Frame131() {
  return (
    <div className="bg-[#efefef] content-stretch flex items-center justify-center px-[5px] py-[2px] relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[9px] text-black text-nowrap tracking-[0.54px]">
        <p className="leading-[normal]">SSO</p>
      </div>
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Frame130 />
      <Frame131 />
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-black tracking-[0.24px] w-[130px]">
        <p className="leading-[normal]">Wiki</p>
      </div>
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame133 />
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[102px]">
      <Frame134 />
    </div>
  );
}

function Group9() {
  return (
    <div className="relative shrink-0 size-[7px]" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 7 7"
      >
        <g id="Group">
          <path d={svgPaths.pbe71200} fill="var(--fill-0, black)" id="Vector" />
          <path
            d={svgPaths.p92cfdf0}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p25cd4c00}
            fill="var(--fill-0, black)"
            id="Vector_3"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0">
      <Group9 />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#818181] text-[10px] tracking-[0.2px] w-[130px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal] underline">
          Get info
        </p>
      </div>
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start mb-[-8px] relative shrink-0">
      <Frame132 />
      <Frame135 />
      <Frame136 />
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] pt-0 px-0 relative shrink-0">
      <Frame129 />
      <Frame137 />
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame138 />
    </div>
  );
}

function Frame140() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-start justify-center left-[13px] top-[calc(50%-22px)] translate-y-[-50%]">
      <div className="relative shrink-0 size-[38px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgRectangle134}
        />
      </div>
      <Frame139 />
    </div>
  );
}

function AnnouncementCard9() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] h-[122px] items-start relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.12)] shrink-0"
      data-name="Announcement-card"
    >
      <Group25 />
      <Frame140 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[23px] items-start left-0 top-[49px] w-[664px]">
      <AnnouncementCard />
      <AnnouncementCard1 />
      <AnnouncementCard2 />
      <AnnouncementCard3 />
      <AnnouncementCard4 />
      <AnnouncementCard5 />
      <AnnouncementCard6 />
      <AnnouncementCard7 />
      <AnnouncementCard8 />
      <AnnouncementCard9 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute h-[272px] left-[173px] top-[211px] w-[664px]">
      <div className="absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] left-0 not-italic text-[24px] text-black text-nowrap top-[8.5px] translate-y-[-50%]">
        <p className="leading-[normal]">Your applications</p>
      </div>
      <Frame35 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute content-stretch flex items-center left-[411px] top-[111px]">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Helvetica_Neue:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black text-nowrap underline">
        Browse all applications
      </p>
    </div>
  );
}

function Frame1() {
  return <div className="absolute left-[947px] size-[8px] top-[735px]" />;
}

function Group13() {
  return (
    <div className="absolute contents left-[947px] top-[165px]">
      <div className="absolute flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] left-[947px] not-italic text-[19px] text-black text-nowrap top-[176.5px] translate-y-[-50%]">
        <p className="leading-[normal]">Featured News</p>
      </div>
    </div>
  );
}

function Frame146() {
  return (
    <div className="h-[218px] relative shrink-0 w-full">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        src={imgRectangle134}
      />
    </div>
  );
}

function Frame159() {
  return (
    <div className="content-stretch flex items-start mb-[-17px] shrink-0 w-full" />
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#535252] text-[24px] w-full">
        Here Is A News Title
      </p>
    </div>
  );
}

function Frame157() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-17px] relative shrink-0 w-full">
      <Frame149 />
    </div>
  );
}

function Frame148() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[17px] pt-0 px-0 relative shrink-0 w-full">
      <Frame159 />
      <Frame157 />
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-end relative shrink-0 w-full">
      <Frame148 />
      <p className="font-['Helvetica_Neue_LT_Std:55_Roman',sans-serif] leading-[19px] not-italic relative shrink-0 text-[#535252] text-[12px] tracking-[0.25px] w-full">
        Lorem ipsum dolor sit amet consecteturIn at libero hendrerit egestas
        tempus. Egestas dignissim adipiscing donec nisl lectus.
      </p>
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame142 />
    </div>
  );
}

function Frame144() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-end justify-end size-full">
        <div className="content-stretch flex flex-col items-end justify-end p-[24px] relative w-full">
          <Frame153 />
        </div>
      </div>
    </div>
  );
}

function Frame147() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Frame146 />
      <Frame144 />
    </div>
  );
}

function Frame155() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative w-[327px]">
      <Frame147 />
    </div>
  );
}

function Group14() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame155 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[947px] top-[209px]">
      <Group14 />
    </div>
  );
}

function Frame160() {
  return (
    <div className="content-stretch flex items-start mb-[-17px] shrink-0 w-full" />
  );
}

function Frame150() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#535252] text-[24px] w-full">
        Here Is A News Title
      </p>
    </div>
  );
}

function Frame158() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-17px] relative shrink-0 w-full">
      <Frame150 />
    </div>
  );
}

function Frame151() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[17px] pt-0 px-0 relative shrink-0 w-full">
      <Frame160 />
      <Frame158 />
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-end relative shrink-0 w-full">
      <Frame151 />
      <p className="font-['Helvetica_Neue_LT_Std:55_Roman',sans-serif] leading-[19px] not-italic relative shrink-0 text-[#535252] text-[12px] tracking-[0.25px] w-full">
        Lorem ipsum dolor sit amet consecteturIn at libero hendrerit egestas
        tempus. Egestas dignissim adipiscing donec nisl lectus.
      </p>
    </div>
  );
}

function Frame154() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame143 />
    </div>
  );
}

function Frame145() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-end justify-end size-full">
        <div className="content-stretch flex flex-col items-end justify-end p-[24px] relative w-full">
          <Frame154 />
        </div>
      </div>
    </div>
  );
}

function Frame152() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Frame145 />
    </div>
  );
}

function Frame156() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative w-[327px]">
      <Frame152 />
    </div>
  );
}

function Group26() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame156 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[947px] top-[601px]">
      <Group26 />
    </div>
  );
}

function Frame141() {
  return (
    <div className="absolute bg-[#efefef] content-stretch flex items-center justify-center left-[116px] px-[5px] py-[2px] top-[142px]">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[7px] text-black text-nowrap tracking-[0.42px]">
        <p className="leading-[normal]">MFA</p>
      </div>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents left-[116px] top-[142px]">
      <Frame141 />
      <div className="absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-end leading-[0] left-[146px] not-italic text-[9px] text-black text-nowrap top-[154px] tracking-[0.54px] translate-y-[-100%]">
        <p className="leading-[normal]">Multi-factor Authentication</p>
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="absolute bg-[#efefef] content-stretch flex items-center justify-center left-[287px] px-[5px] py-[2px] top-[142px]">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[7px] text-black text-nowrap tracking-[0.42px]">
        <p className="leading-[normal]">SSO</p>
      </div>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents left-[287px] top-[142px]">
      <Frame90 />
      <div className="absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-end leading-[0] left-[316px] not-italic text-[9px] text-black text-nowrap top-[154px] tracking-[0.54px] translate-y-[-100%]">
        <p className="leading-[normal]">Single Sign-On</p>
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="absolute bg-[#efefef] content-stretch flex items-center justify-center left-[403px] px-[5px] py-[2px] top-[142px]">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[7px] text-black text-nowrap tracking-[0.42px]">
        <p className="leading-[normal]">VPN</p>
      </div>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents left-[403px] top-[142px]">
      <Frame91 />
      <div className="absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-end leading-[0] left-[432px] not-italic text-[9px] text-black text-nowrap top-[154px] tracking-[0.54px] translate-y-[-100%]">
        <p className="leading-[normal]">{`Virtual Private Network `}</p>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents left-[947px] top-[797px]">
      <div className="absolute flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] left-[947px] not-italic text-[19px] text-black text-nowrap top-[808.5px] translate-y-[-50%]">
        <p className="leading-[normal]">Helpful Resources</p>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents font-['Helvetica_Neue:Regular',sans-serif] leading-[0] left-[947px] not-italic text-[#212529] text-[15px] text-nowrap top-[839px]">
      <div className="absolute flex flex-col justify-center left-[947px] top-[848px] translate-y-[-50%]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal] text-nowrap underline">
          Complete Cyber Security Training
        </p>
      </div>
      <div className="absolute flex flex-col justify-center left-[947px] top-[877px] translate-y-[-50%]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal] text-nowrap underline">
          Report Phishing
        </p>
      </div>
    </div>
  );
}

export default function AppsPage() {
  return (
    <div className="bg-[#f6f6f6] relative size-full" data-name="Apps-page">
      <div className="absolute bg-[#d9d9d9] h-[190px] left-0 top-[1283px] w-[1440px]" />
      <div className="absolute bg-white h-[805px] left-[116px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.11)] top-[165px] w-[773px]" />
      <MainNav1 />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] left-[116px] not-italic text-[16px] text-black text-nowrap top-[50px] translate-y-[-100%]">
        <p className="leading-[normal]">Global Header/Branding</p>
      </div>
      <Group12 />
      <Frame36 />
      <Frame50 />
      <Frame1 />
      <Group13 />
      <Frame32 />
      <Frame92 />
      <Group30 />
      <Group29 />
      <Group28 />
      <div className="absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-end leading-[0] left-[117px] not-italic text-[11px] text-black text-nowrap top-[1399px] tracking-[0.66px] translate-y-[-100%]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal] underline">
          Terms of Service
        </p>
      </div>
      <div className="absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-end leading-[0] left-[117px] not-italic text-[11px] text-black text-nowrap top-[1379px] tracking-[0.66px] translate-y-[-100%]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal] underline">
          Lorem Ipsum Dolor
        </p>
      </div>
      <div className="absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-end leading-[0] left-[117px] not-italic text-[11px] text-black text-nowrap top-[1359px] tracking-[0.66px] translate-y-[-100%]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal] underline">
          Lorem Ipsum Dolor
        </p>
      </div>
      <div className="absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-end leading-[0] left-[117px] not-italic text-[16px] text-black text-nowrap top-[1340px] tracking-[0.32px] translate-y-[-100%]">
        <p className="leading-[normal]">Resources</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] left-[1080px] not-italic text-[16px] text-black text-nowrap top-[1339px] translate-y-[-100%]">
        <p className="leading-[normal]">Global Footer</p>
      </div>
      <Group27 />
      <Group15 />
    </div>
  );
}
