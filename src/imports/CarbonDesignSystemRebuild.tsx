import svgPaths from "./svg-znmxqqk2v4";
import imgRender from "figma:asset/d60133c5136ade4a8ede82fbaf62b373f07cb4d0.png";
import imgRender1 from "figma:asset/92c762f608e575c652491e3b0005de5bee253a6f.png";
import imgRender2 from "figma:asset/7780bb2c5bf4db4f70bd00951e289c232bb1f816.png";
import imgRender3 from "figma:asset/91abec1462fa71301b4d7e9de77164a5f88375a1.png";

function Tile({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Tile">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[56px] items-start pl-[40px] pr-0 py-[40px] relative size-full">
          <div className="bg-[#d0e2ff] relative rounded-[10px] shrink-0 size-[40px]" data-name="LockIcon">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
              <div className="relative shrink-0 size-[32px]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Icon">
                    <path d={svgPaths.p28499e71} fill="var(--fill-0, #161616)" id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[405.664px]" data-name="render">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-full items-start relative w-[405.664px]">
              <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[405.664px]" data-name="Heading 3">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[405.664px]">
                  <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[32px] left-0 not-italic text-[#161616] text-[24px] text-nowrap top-0 tracking-[0.0703px] whitespace-pre">Subscription Management</p>
                </div>
              </div>
              <div className="h-[24px] relative shrink-0 w-[405.664px]" data-name="Paragraph">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[405.664px]">
                  <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-600 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Effortlessly handle and optimize subscriptions with it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function X30() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[4.5px] w-[148.766px]" data-name="x30">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap tracking-[-0.3125px] whitespace-pre">Skip to main content</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1d45a8f0} fill="var(--fill-0, #0A0A0A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function E29() {
  return (
    <div className="absolute left-[148.77px] size-[20px] top-0" data-name="E29">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-0 left-0 right-[0.22%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.pd1da400} fill="var(--fill-0, #24A148)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[24px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[67.367px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[67.367px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#24a148] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">SaasAble</p>
      </div>
    </div>
  );
}

function Render() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[24px] items-center left-0 top-0 w-[1481px]" data-name="render">
      <Container />
      <Text />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[24px] left-0 top-[26px] w-[1481px]" data-name="Link">
      <Render />
    </div>
  );
}

function HeaderMenuItem() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[67.672px]" data-name="HeaderMenuItem">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap tracking-[-0.3125px] whitespace-pre">Overview</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[19px] left-0 top-[2.5px] w-[67.672px]" data-name="Link">
      <HeaderMenuItem />
    </div>
  );
}

function HeaderMenuItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[67.672px]" data-name="HeaderMenuItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[67.672px]">
        <Link1 />
      </div>
    </div>
  );
}

function HeaderMenuItem2() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[65.281px]" data-name="HeaderMenuItem">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap tracking-[-0.3125px] whitespace-pre">Products</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[19px] left-0 top-[2.5px] w-[65.281px]" data-name="Link">
      <HeaderMenuItem2 />
    </div>
  );
}

function HeaderMenuItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[65.281px]" data-name="HeaderMenuItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[65.281px]">
        <Link2 />
      </div>
    </div>
  );
}

function HeaderMenuItem4() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[50.016px]" data-name="HeaderMenuItem">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap tracking-[-0.3125px] whitespace-pre">Pricing</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[19px] left-0 top-[2.5px] w-[50.016px]" data-name="Link">
      <HeaderMenuItem4 />
    </div>
  );
}

function HeaderMenuItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[50.016px]" data-name="HeaderMenuItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[50.016px]">
        <Link3 />
      </div>
    </div>
  );
}

function HeaderMenuItem6() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[67.977px]" data-name="HeaderMenuItem">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap tracking-[-0.3125px] whitespace-pre">Resource</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[19px] left-0 top-[2.5px] w-[67.977px]" data-name="Link">
      <HeaderMenuItem6 />
    </div>
  );
}

function HeaderMenuItem7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[67.977px]" data-name="HeaderMenuItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[67.977px]">
        <Link4 />
      </div>
    </div>
  );
}

function HeaderMenuItem8() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[33.578px]" data-name="HeaderMenuItem">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap tracking-[-0.3125px] whitespace-pre">Help</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[19px] left-0 top-[2.5px] w-[33.578px]" data-name="Link">
      <HeaderMenuItem8 />
    </div>
  );
}

function HeaderMenuItem9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[33.578px]" data-name="HeaderMenuItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[33.578px]">
        <Link5 />
      </div>
    </div>
  );
}

function F45() {
  return (
    <div className="absolute box-border content-stretch flex h-[24px] items-start justify-center left-[24px] pl-0 pr-[0.008px] py-0 top-[50px] w-[1433px]" data-name="f45">
      <HeaderMenuItem1 />
      <HeaderMenuItem3 />
      <HeaderMenuItem5 />
      <HeaderMenuItem7 />
      <HeaderMenuItem9 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pe70b700} fill="var(--fill-0, #0A0A0A)" id="Vector" />
          <path d={svgPaths.p3c2a6a00} fill="var(--fill-0, #0A0A0A)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Button">
      <Icon2 />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[34.156px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap tracking-[-0.3125px] whitespace-pre">User</p>
    </div>
  );
}

function Text2() {
  return <div className="absolute h-[19px] left-[34.16px] top-0 w-0" data-name="Text" />;
}

function PopoverContent() {
  return (
    <div className="absolute h-[19px] left-0 top-[28.5px] w-[34.156px]" data-name="PopoverContent">
      <Text1 />
      <Text2 />
    </div>
  );
}

function HeaderGlobalBar() {
  return (
    <div className="absolute h-[47.5px] left-0 top-[74px] w-[1481px]" data-name="HeaderGlobalBar">
      <Button />
      <PopoverContent />
    </div>
  );
}

function C40() {
  return (
    <div className="h-[124px] relative shrink-0 w-full" data-name="c40">
      <X30 />
      <E29 />
      <Link />
      <F45 />
      <HeaderGlobalBar />
    </div>
  );
}

function C45() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[67.672px]" data-name="c45">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap tracking-[-0.3125px] whitespace-pre">Overview</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute h-[19px] left-0 top-[2.5px] w-[67.672px]" data-name="Link">
      <C45 />
    </div>
  );
}

function P54() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="p54">
      <Link6 />
    </div>
  );
}

function C46() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[65.281px]" data-name="c45">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap tracking-[-0.3125px] whitespace-pre">Products</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute h-[19px] left-0 top-[2.5px] w-[65.281px]" data-name="Link">
      <C46 />
    </div>
  );
}

function P55() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="p54">
      <Link7 />
    </div>
  );
}

function C47() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[50.016px]" data-name="c45">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap tracking-[-0.3125px] whitespace-pre">Pricing</p>
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute h-[19px] left-0 top-[2.5px] w-[50.016px]" data-name="Link">
      <C47 />
    </div>
  );
}

function P56() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="p54">
      <Link8 />
    </div>
  );
}

function C48() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[67.977px]" data-name="c45">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap tracking-[-0.3125px] whitespace-pre">Resource</p>
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute h-[19px] left-0 top-[2.5px] w-[67.977px]" data-name="Link">
      <C48 />
    </div>
  );
}

function P57() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="p54">
      <Link9 />
    </div>
  );
}

function C49() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[33.578px]" data-name="c45">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap tracking-[-0.3125px] whitespace-pre">Help</p>
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute h-[19px] left-0 top-[2.5px] w-[33.578px]" data-name="Link">
      <C49 />
    </div>
  );
}

function P58() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="p54">
      <Link10 />
    </div>
  );
}

function SideNavItems() {
  return (
    <div className="content-stretch flex flex-col h-[120px] items-start relative shrink-0 w-full" data-name="SideNavItems">
      <P54 />
      <P55 />
      <P56 />
      <P57 />
      <P58 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[421.07px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[421.07px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[48px] left-[211px] not-italic text-[48px] text-black text-center text-nowrap top-[0.5px] tracking-[-0.8484px] translate-x-[-50%] whitespace-pre">Design for all mankind</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[512px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[512px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28px] left-[256.28px] not-italic text-[20px] text-center text-neutral-600 top-0 tracking-[-0.4492px] translate-x-[-50%] w-[477px]">Safeguard your critical information effortlessly with our secure and automated backup solutions.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[512px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-full items-center relative w-[512px]">
        <Heading1 />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35e66c80} fill="var(--fill-0, #0A0A0A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[207.375px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[207.375px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Try Predictive Cost Analytics</p>
        <Icon3 />
      </div>
    </div>
  );
}

function Render1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[40px] h-[328px] items-center left-0 px-0 py-[64px] top-0 w-[1481px]" data-name="render">
      <Container1 />
      <Button1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[32px] left-[701.45px] not-italic text-[#161616] text-[24px] text-center text-nowrap top-0 tracking-[0.0703px] translate-x-[-50%] whitespace-pre">Made to fit your workflow, you are in control</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[42.5px] items-start left-[59.44px] top-[7px] w-[29.461px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[40px] not-italic relative shrink-0 text-[#161616] text-[36px] text-center text-nowrap tracking-[0.3691px] whitespace-pre">%</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[48.5px] relative shrink-0 w-[88.898px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48.5px] relative w-[88.898px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[48px] left-[30.5px] not-italic text-[#161616] text-[48px] text-center text-nowrap top-[0.5px] tracking-[0.3516px] translate-x-[-50%] whitespace-pre">90</p>
        <Text3 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[331.734px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[331.734px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-[166px] not-italic text-[16px] text-center text-neutral-600 text-nowrap top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Power of AI for navigation and communication</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[144px] items-center left-[78.51px] pb-[63.5px] pt-0 px-0 top-0 w-[331.734px]" data-name="Container">
      <Container2 />
      <Paragraph1 />
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-[#e0e0e0] h-[144px] left-[450.24px] top-0 w-px" data-name="Container" />;
}

function Container5() {
  return (
    <div className="h-[48px] relative shrink-0 w-[73.922px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[73.922px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[48px] left-[37.5px] not-italic text-[#161616] text-[48px] text-center text-nowrap top-[0.5px] tracking-[0.3516px] translate-x-[-50%] whitespace-pre">10x</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[390.875px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[390.875px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-[195.5px] not-italic text-[16px] text-center text-neutral-600 text-nowrap top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Achieving faster sales through streamlined processes.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[144px] items-center left-[491.24px] pb-[64px] pt-0 px-0 top-0 w-[390.875px]" data-name="Container">
      <Container5 />
      <Paragraph2 />
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-[#e0e0e0] h-[144px] left-[922.12px] top-0 w-px" data-name="Container" />;
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[42.5px] items-start left-[55.95px] top-[7px] w-[29.461px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[40px] not-italic relative shrink-0 text-[#161616] text-[36px] text-center text-nowrap tracking-[0.3691px] whitespace-pre">%</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[48.5px] relative shrink-0 w-[85.406px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48.5px] relative w-[85.406px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[48px] left-[28.5px] not-italic text-[#161616] text-[48px] text-center text-nowrap top-[0.5px] tracking-[0.3516px] translate-x-[-50%] whitespace-pre">25</p>
        <Text4 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[359.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[359.375px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-[180px] not-italic text-[16px] text-center text-neutral-600 text-nowrap top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Reduction in overall costs, attributed to optimized</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[144px] items-center left-[963.12px] pb-[63.5px] pt-0 px-0 top-0 w-[359.375px]" data-name="Container">
      <Container8 />
      <Paragraph3 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[144px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[144px] relative w-full">
        <Container3 />
        <Container4 />
        <Container6 />
        <Container7 />
        <Container9 />
      </div>
    </div>
  );
}

function Render2() {
  return (
    <div className="absolute bg-[#e8f5e9] box-border content-stretch flex flex-col gap-[32px] items-start left-0 px-0 py-[40px] top-[376px] w-[1481px]" data-name="render">
      <Heading2 />
      <Container10 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1481px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[1481px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[40px] left-0 not-italic text-[#161616] text-[36px] text-nowrap top-[0.5px] tracking-[0.3691px] whitespace-pre">Our Powerful CRM Features</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[28px] relative shrink-0 w-[1481px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[1481px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28px] left-0 not-italic text-[20px] text-neutral-600 text-nowrap top-0 tracking-[-0.4492px] whitespace-pre">Discover the Features That Will Transform Your Customer Relationships</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[80px] relative shrink-0 w-[1481px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-[80px] items-start relative w-[1481px]">
        <Heading4 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p31d6a600} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PathIcon() {
  return (
    <div className="bg-[#d0e2ff] relative rounded-[10px] shrink-0 size-[40px]" data-name="PathIcon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[405.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[405.664px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[32px] left-0 not-italic text-[#161616] text-[24px] text-nowrap top-0 tracking-[0.0703px] whitespace-pre">Journey Mapping</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[405.664px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[405.664px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-600 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Customer experiences at every touchpoint with it.</p>
      </div>
    </div>
  );
}

function Render3() {
  return (
    <div className="h-[68px] relative shrink-0 w-[405.664px]" data-name="render">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-[68px] items-start relative w-[405.664px]">
        <Heading3 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Tile1() {
  return (
    <div className="absolute bg-[#f4f4f4] box-border content-stretch flex flex-col gap-[56px] h-[268px] items-start left-[497.66px] pb-0 pl-[40px] pr-0 pt-[40px] top-0 w-[485.664px]" data-name="Tile">
      <PathIcon />
      <Render3 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p13af4100} fill="var(--fill-0, #161616)" id="Vector" />
          <path d={svgPaths.p3d300200} fill="var(--fill-0, #161616)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function StatisticIcon() {
  return (
    <div className="bg-[#d0e2ff] relative rounded-[10px] shrink-0 size-[40px]" data-name="StatisticIcon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon5 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[32px] relative shrink-0 w-[405.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[405.664px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[32px] left-0 not-italic text-[#161616] text-[24px] text-nowrap top-0 tracking-[0.0703px] whitespace-pre">{`Voice & Speech Analytics`}</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[405.664px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[405.664px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-600 top-[-0.5px] tracking-[-0.3125px] w-[399px]">Actionable insights from customer interactions through it.</p>
      </div>
    </div>
  );
}

function Render4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[405.664px]" data-name="render">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-full items-start relative w-[405.664px]">
        <Heading5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Tile2() {
  return (
    <div className="absolute bg-[#f4f4f4] box-border content-stretch flex flex-col gap-[56px] h-[268px] items-start left-[995.33px] pl-[40px] pr-0 py-[40px] top-0 w-[485.664px]" data-name="Tile">
      <StatisticIcon />
      <Render4 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p14980460} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RemoteIcon() {
  return (
    <div className="bg-[#d0e2ff] relative rounded-[10px] shrink-0 size-[40px]" data-name="RemoteIcon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon6 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[405.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[405.664px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[32px] left-0 not-italic text-[#161616] text-[24px] text-nowrap top-0 tracking-[0.0703px] whitespace-pre">Sales Gamification</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[405.664px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[405.664px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-600 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Boost sales team motivation and performance with it.</p>
      </div>
    </div>
  );
}

function Render5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[405.664px]" data-name="render">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-full items-start relative w-[405.664px]">
        <Heading6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Tile3() {
  return (
    <div className="absolute bg-[#f4f4f4] box-border content-stretch flex flex-col gap-[56px] h-[244px] items-start left-0 pl-[40px] pr-0 py-[40px] top-[280px] w-[485.664px]" data-name="Tile">
      <RemoteIcon />
      <Render5 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p30f35000} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function InterfaceIcon() {
  return (
    <div className="bg-[#d0e2ff] relative rounded-[10px] shrink-0 size-[40px]" data-name="InterfaceIcon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon8 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[405.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[405.664px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[32px] left-0 not-italic text-[#161616] text-[24px] text-nowrap top-0 tracking-[0.0703px] whitespace-pre">Intuitive Interface</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[405.664px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[405.664px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-600 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">{`Simplify user interactions & enhance usability with it.`}</p>
      </div>
    </div>
  );
}

function Render7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[405.664px]" data-name="render">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-full items-start relative w-[405.664px]">
        <Heading8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Tile4() {
  return (
    <div className="absolute bg-[#f7f2fa] box-border content-stretch flex flex-col gap-[56px] h-[244px] items-start left-[995.33px] pl-[40px] pr-0 py-[40px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[280px] w-[485.664px]" data-name="Tile">
      <InterfaceIcon />
      <Render7 />
    </div>
  );
}

function TitleWrapper() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Title wrapper">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pl-[16px] pr-[8px] py-[16px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[36px] not-italic relative shrink-0 text-[#161616] text-[28px] w-full">Subscription Management</p>
        </div>
      </div>
    </div>
  );
}

function ContentArea() {
  return (
    <div className="content-stretch flex items-end justify-center relative shrink-0 w-full z-[8]" data-name="Content area">
      <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none" />
      <TitleWrapper />
    </div>
  );
}

function BodyTextWrapper() {
  return (
    <div className="relative shrink-0 w-full z-[7]" data-name="Body text wrapper">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="box-border content-stretch flex items-end justify-center pb-[16px] pt-0 px-[16px] relative w-full">
          <p className="basis-0 font-['IBM_Plex_Sans:Regular',_sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">Customer experiences at every touchpoint with it</p>
        </div>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Arrow--right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Arrow--right">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.p2a16f600} fill="var(--fill-0, #0F62FE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col items-center justify-center mix-blend-multiply overflow-clip p-[3px] relative shrink-0 size-[48px]" data-name="Icon">
      <ArrowRight />
    </div>
  );
}

function InteractiveIcon() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-end relative shrink-0 w-full z-[5]" data-name="Interactive icon">
      <Icon9 />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute bg-[#f4f4f4] content-stretch flex flex-col h-[269px] isolate items-start left-0 rounded-[2px] top-0 w-[486px]" data-name="Component">
      <ContentArea />
      <BodyTextWrapper />
      <InteractiveIcon />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p14980460} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RemoteIcon1() {
  return (
    <div className="absolute bg-[#d0e2ff] content-stretch flex items-center justify-center left-[16px] rounded-[10px] size-[40px] top-[199px]" data-name="RemoteIcon">
      <Icon10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1481px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[1481px]">
        <Tile1 />
        <Tile2 />
        <Tile3 />
        <Tile className="absolute bg-[#f7f2fa] box-border content-stretch flex flex-col gap-[56px] h-[244px] items-start left-[497.66px] pl-[40px] pr-0 py-[40px] top-[280px] w-[485.664px]" />
        <Tile4 />
        <Component />
        <RemoteIcon1 />
      </div>
    </div>
  );
}

function Render8() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[32px] h-[732px] items-start left-0 px-0 py-[48px] top-[712px] w-[1481px]" data-name="render">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[80px] leading-[40px] left-[432.09px] not-italic text-[#161616] text-[36px] text-center text-nowrap top-[66px] tracking-[0.3691px] w-[616.805px] whitespace-pre" data-name="Heading 2">
      <p className="absolute left-[308.52px] top-[0.5px] translate-x-[-50%]">Secure Your Assets and Dive into the</p>
      <p className="absolute left-[308px] top-[40.5px] translate-x-[-50%]">Future – Download Coinomi Wallet Now!</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[24px] left-[700.94px] top-[186px] w-[79.117px]" data-name="Button">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Install Now</p>
    </div>
  );
}

function Render9() {
  return (
    <div className="absolute h-[276px] left-0 overflow-clip rounded-[16px] top-[1492px] w-[1481px]" data-name="render">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgRender} />
      <Heading9 />
      <Button2 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1481px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[1481px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[40px] left-[740.43px] not-italic text-[#161616] text-[36px] text-center text-nowrap top-[0.5px] tracking-[0.3691px] translate-x-[-50%] whitespace-pre">Insights and Knowledge Hub</p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[28px] relative shrink-0 w-[1481px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[1481px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28px] left-[740.97px] not-italic text-[20px] text-center text-neutral-600 text-nowrap top-0 tracking-[-0.4492px] translate-x-[-50%] whitespace-pre">Discover the Features That Will Transform Your Customer Relationships</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[80px] relative shrink-0 w-[1481px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-[80px] items-start relative w-[1481px]">
        <Heading10 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Render10() {
  return (
    <div className="h-[320px] relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 w-[734.5px]" data-name="render">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[10px] rounded-tr-[10px] size-full" src={imgRender1} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[320px] w-[734.5px]" />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[16px] relative shrink-0 w-[670.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[670.5px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-neutral-600 text-nowrap top-px whitespace-pre">24 Jan 2024 · 5 Min Read</p>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[670.5px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[670.5px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[32px] left-0 not-italic text-[#161616] text-[24px] text-nowrap top-0 tracking-[0.0703px] whitespace-pre">The power of SaaS and how it can revolutionize.</p>
      </div>
    </div>
  );
}

function Render11() {
  return (
    <div className="h-[124px] relative shrink-0 w-[734.5px]" data-name="render">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-[124px] items-start pl-[32px] pr-0 py-[32px] relative w-[734.5px]">
        <Paragraph11 />
        <Heading11 />
      </div>
    </div>
  );
}

function Tile5() {
  return (
    <div className="[grid-area:1_/_1] bg-[#f7f2fa] content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Tile">
      <Render10 />
      <Render11 />
    </div>
  );
}

function Render12() {
  return (
    <div className="relative rounded-bl-[10px] rounded-tl-[10px] shrink-0 size-[176px]" data-name="render">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[10px] rounded-tl-[10px] size-full" src={imgRender2} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[176px]" />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[16px] relative shrink-0 w-[416.758px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[416.758px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-neutral-600 text-nowrap top-px whitespace-pre">24 Jan 2024 · 5 Min Read</p>
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[28px] relative shrink-0 w-[416.758px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[416.758px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28px] left-0 not-italic text-[#161616] text-[20px] text-nowrap top-0 tracking-[-0.4492px] whitespace-pre">The power of SaaS and how it can revolutionize.</p>
      </div>
    </div>
  );
}

function Render13() {
  return (
    <div className="h-[176px] relative shrink-0 w-[464.758px]" data-name="render">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[176px] items-start justify-between pb-0 pl-[24px] pr-0 pt-[24px] relative w-[464.758px]">
        <Paragraph12 />
        <Heading12 />
      </div>
    </div>
  );
}

function Tile6() {
  return (
    <div className="bg-[#f7f2fa] h-[176px] relative shrink-0 w-[734.5px]" data-name="Tile">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[24px] h-[176px] items-start overflow-clip relative rounded-[inherit] w-[734.5px]">
        <Render12 />
        <Render13 />
      </div>
    </div>
  );
}

function Render14() {
  return (
    <div className="relative rounded-bl-[10px] rounded-tl-[10px] shrink-0 size-[176px]" data-name="render">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[10px] rounded-tl-[10px] size-full" src={imgRender3} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[176px]" />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[16px] relative shrink-0 w-[410.195px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[410.195px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-neutral-600 text-nowrap top-px whitespace-pre">24 Jan 2024 · 5 Min Read</p>
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[28px] relative shrink-0 w-[410.195px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[410.195px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28px] left-0 not-italic text-[#161616] text-[20px] text-nowrap top-0 tracking-[-0.4492px] whitespace-pre">Maximize Efficiency and Productivity Compre...</p>
      </div>
    </div>
  );
}

function Render15() {
  return (
    <div className="h-[176px] relative shrink-0 w-[458.195px]" data-name="render">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[176px] items-start justify-between pb-0 pl-[24px] pr-0 pt-[24px] relative w-[458.195px]">
        <Paragraph13 />
        <Heading13 />
      </div>
    </div>
  );
}

function Tile7() {
  return (
    <div className="basis-0 bg-[#f7f2fa] grow min-h-px min-w-px relative shrink-0 w-[734.5px]" data-name="Tile">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[24px] h-full items-start overflow-clip relative rounded-[inherit] w-[734.5px]">
        <Render14 />
        <Render15 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="basis-0 grow h-[28px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28px] left-0 not-italic text-[#0f62fe] text-[20px] text-nowrap top-0 tracking-[-0.4492px] whitespace-pre">View All</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p14009280} fill="var(--fill-0, #0F62FE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#f7f2fa] h-[92px] relative shrink-0 w-[734.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[92px] items-center px-[314.797px] py-0 relative w-[734.5px]">
        <Text5 />
        <Icon11 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Container">
      <Tile6 />
      <Tile7 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1481px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[12px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-full relative w-[1481px]">
        <Tile5 />
        <Container15 />
      </div>
    </div>
  );
}

function Render16() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[32px] h-[676px] items-start left-0 px-0 py-[48px] top-[1816px] w-[1481px]" data-name="render">
      <Container13 />
      <Container16 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[40px] left-0 not-italic text-[#161616] text-[36px] text-nowrap top-[0.5px] tracking-[0.3691px] whitespace-pre">Frequently Ask Questions</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28px] left-0 not-italic text-[20px] text-neutral-600 text-nowrap top-0 tracking-[-0.4492px] whitespace-pre">Discover how our product seamlessly integrates with various tools.</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="basis-0 grow h-[80px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-[80px] items-start relative w-full">
        <Heading14 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[91.172px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[91.172px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Get in Touch</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[80px] relative shrink-0 w-[1481px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[80px] items-end justify-between relative w-[1481px]">
        <Container17 />
        <Button3 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#e0e0e0] h-px relative shrink-0 w-[1481px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-px w-[1481px]" />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pa88e080} fill="var(--fill-0, #0A0A0A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[24px] left-0 top-[16px] w-[133.625px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">What is SaasAble?</p>
    </div>
  );
}

function V10() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[133.625px]" data-name="V10">
      <Icon12 />
      <Container20 />
    </div>
  );
}

function Render17() {
  return (
    <div className="absolute h-[48px] left-0 top-[40px] w-[734.5px]" data-name="render">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-600 top-[-0.5px] tracking-[-0.3125px] w-[732px]">SaasAble is a cutting-edge CRM platform powered by AI, designed to help startups and businesses streamline customer relationship management, enhance data analysis, and improve overall efficiency.</p>
    </div>
  );
}

function Q10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[734.5px]" data-name="q10">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[734.5px]">
        <V10 />
        <Render17 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pa88e080} fill="var(--fill-0, #0A0A0A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[24px] left-0 top-[16px] w-[303.703px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Is SaasAble suitable for small businesses?</p>
    </div>
  );
}

function V11() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[303.703px]" data-name="V10">
      <Icon13 />
      <Container21 />
    </div>
  );
}

function Render18() {
  return (
    <div className="absolute h-[24px] left-0 top-[40px] w-[734.5px]" data-name="render">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-600 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Content here</p>
    </div>
  );
}

function Q11() {
  return (
    <div className="h-[64px] relative shrink-0 w-[734.5px]" data-name="q10">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[64px] relative w-[734.5px]">
        <V11 />
        <Render18 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pa88e080} fill="var(--fill-0, #0A0A0A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[24px] left-0 top-[16px] w-[379.469px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">How can I integrate SaasAble with my existing tools?</p>
    </div>
  );
}

function V12() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[379.469px]" data-name="V10">
      <Icon14 />
      <Container22 />
    </div>
  );
}

function Render19() {
  return (
    <div className="absolute h-[24px] left-0 top-[40px] w-[734.5px]" data-name="render">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-600 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Content here</p>
    </div>
  );
}

function Q12() {
  return (
    <div className="h-[64px] relative shrink-0 w-[734.5px]" data-name="q10">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[64px] relative w-[734.5px]">
        <V12 />
        <Render19 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Container">
      <Q10 />
      <Q11 />
      <Q12 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pa88e080} fill="var(--fill-0, #0A0A0A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[24px] left-0 top-[16px] w-[373.938px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">{`How does SaasAble's AI enhance CRM capabilities?`}</p>
    </div>
  );
}

function V13() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[373.938px]" data-name="V10">
      <Icon15 />
      <Container24 />
    </div>
  );
}

function Render20() {
  return (
    <div className="absolute h-[24px] left-0 top-[40px] w-[734.5px]" data-name="render">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-600 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Content here</p>
    </div>
  );
}

function Q13() {
  return (
    <div className="h-[64px] relative shrink-0 w-[734.5px]" data-name="q10">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[64px] relative w-[734.5px]">
        <V13 />
        <Render20 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pa88e080} fill="var(--fill-0, #0A0A0A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[24px] left-0 top-[16px] w-[302.883px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Can I customize the features in SaasAble?</p>
    </div>
  );
}

function V14() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[302.883px]" data-name="V10">
      <Icon16 />
      <Container25 />
    </div>
  );
}

function Render21() {
  return (
    <div className="absolute h-[24px] left-0 top-[40px] w-[734.5px]" data-name="render">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-600 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Content here</p>
    </div>
  );
}

function Q14() {
  return (
    <div className="h-[64px] relative shrink-0 w-[734.5px]" data-name="q10">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[64px] relative w-[734.5px]">
        <V14 />
        <Render21 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pa88e080} fill="var(--fill-0, #0A0A0A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[24px] left-0 top-[16px] w-[241.195px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Is my data secure with SaasAble?</p>
    </div>
  );
}

function V15() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[241.195px]" data-name="V10">
      <Icon17 />
      <Container26 />
    </div>
  );
}

function Render22() {
  return (
    <div className="absolute h-[24px] left-0 top-[40px] w-[734.5px]" data-name="render">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-600 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Content here</p>
    </div>
  );
}

function Q15() {
  return (
    <div className="h-[64px] relative shrink-0 w-[734.5px]" data-name="q10">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[64px] relative w-[734.5px]">
        <V15 />
        <Render22 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Container">
      <Q13 />
      <Q14 />
      <Q15 />
    </div>
  );
}

function Container28() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1481px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[12px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-full relative w-[1481px]">
        <Container23 />
        <Container27 />
      </div>
    </div>
  );
}

function Render23() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[40px] h-[497px] items-start left-0 px-0 py-[48px] top-[2492px] w-[1481px]" data-name="render">
      <Container18 />
      <Container19 />
      <Container28 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-0 left-0 right-[0.22%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <path d={svgPaths.p241bad00} fill="var(--fill-0, #24A148)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[28px]">
        <Icon18 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[32px] left-0 not-italic text-[#24a148] text-[24px] text-nowrap top-0 tracking-[0.0703px] whitespace-pre">SaasAble</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[129.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-full items-center relative w-[129.547px]">
        <Container29 />
        <Text6 />
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[60.203px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[60.203px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#161616] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Overview</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[58.109px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[58.109px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#161616] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Products</p>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[44.625px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[44.625px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#161616] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Pricing</p>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#161616] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Resource</p>
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[29.875px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[29.875px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#161616] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Help</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[20px] relative shrink-0 w-[349.281px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[24px] h-[20px] items-start relative w-[349.281px]">
        <Link11 />
        <Link12 />
        <Link13 />
        <Link14 />
        <Link15 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[84px] relative shrink-0 w-[1481px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[32px] h-[84px] items-center relative w-[1481px]">
        <Container30 />
        <Navigation />
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p39872700} fill="var(--fill-0, #24A148)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Button">
      <Icon19 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[60.758px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap tracking-[-0.3125px] whitespace-pre">LinkedIn</p>
    </div>
  );
}

function Text8() {
  return <div className="absolute h-[19px] left-[60.76px] top-0 w-0" data-name="Text" />;
}

function PopoverContent1() {
  return (
    <div className="absolute h-[19px] left-0 top-[32.5px] w-[60.758px]" data-name="PopoverContent">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[54px] relative shrink-0 w-[60.758px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[54px] relative w-[60.758px]">
        <Button4 />
        <PopoverContent1 />
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2b3c2830} fill="var(--fill-0, #24A148)" id="Vector" />
          <path d={svgPaths.p376a3d00} fill="var(--fill-0, #24A148)" id="Vector_2" />
          <path d={svgPaths.p2c4d2c80} fill="var(--fill-0, #24A148)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Button">
      <Icon20 />
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[72.336px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap tracking-[-0.3125px] whitespace-pre">Instagram</p>
    </div>
  );
}

function Text11() {
  return <div className="absolute h-[19px] left-[72.34px] top-0 w-0" data-name="Text" />;
}

function PopoverContent2() {
  return (
    <div className="absolute h-[19px] left-0 top-[32.5px] w-[72.336px]" data-name="PopoverContent">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="basis-0 grow h-[54px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[54px] relative w-full">
        <Button5 />
        <PopoverContent2 />
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1ab12180} fill="var(--fill-0, #24A148)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Button">
      <Icon21 />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[70.453px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap tracking-[-0.3125px] whitespace-pre">Facebook</p>
    </div>
  );
}

function Text14() {
  return <div className="absolute h-[19px] left-[70.45px] top-0 w-0" data-name="Text" />;
}

function PopoverContent3() {
  return (
    <div className="absolute h-[19px] left-0 top-[32.5px] w-[70.453px]" data-name="PopoverContent">
      <Text13 />
      <Text14 />
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[54px] relative shrink-0 w-[70.453px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[54px] relative w-[70.453px]">
        <Button6 />
        <PopoverContent3 />
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2d9b2140} fill="var(--fill-0, #24A148)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Button">
      <Icon22 />
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[61.781px]" data-name="Text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap tracking-[-0.3125px] whitespace-pre">YouTube</p>
    </div>
  );
}

function Text17() {
  return <div className="absolute h-[19px] left-[61.78px] top-0 w-0" data-name="Text" />;
}

function PopoverContent4() {
  return (
    <div className="absolute h-[19px] left-0 top-[32.5px] w-[61.781px]" data-name="PopoverContent">
      <Text16 />
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[54px] relative shrink-0 w-[61.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[54px] relative w-[61.781px]">
        <Button7 />
        <PopoverContent4 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[54px] relative shrink-0 w-[289.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[54px] items-start relative w-[289.328px]">
        <Text9 />
        <Text12 />
        <Text15 />
        <Text18 />
      </div>
    </div>
  );
}

function BoldText() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-[121.11px] top-[1.5px] w-[97.648px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-600 text-nowrap tracking-[-0.1504px] whitespace-pre">Phoenixcoded</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 top-[0.5px] tracking-[-0.1504px] w-[122px]">Copyright © 2024</p>
        <BoldText />
      </div>
    </div>
  );
}

function Link16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[89.391px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[89.391px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Privacy Policy</p>
      </div>
    </div>
  );
}

function Link17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[126.445px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[126.445px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">{`Terms & Conditions`}</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[20px] relative shrink-0 w-[482.594px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[24px] h-[20px] items-start relative w-[482.594px]">
        <Text19 />
        <Link16 />
        <Link17 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1481px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-between pb-0 pt-px px-0 relative w-[1481px]">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[219px] items-start relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container34 />
    </div>
  );
}

function Render24() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[316px] items-start left-0 pb-0 pt-[49px] px-0 top-[2989px] w-[1481px]" data-name="render">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container35 />
    </div>
  );
}

function I36() {
  return (
    <div className="bg-white h-[3305px] relative shrink-0 w-full" data-name="i36">
      <Render1 />
      <Render2 />
      <Render8 />
      <Render9 />
      <Render16 />
      <Render23 />
      <Render24 />
    </div>
  );
}

export default function CarbonDesignSystemRebuild() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Carbon Design System Rebuild">
      <C40 />
      <SideNavItems />
      <I36 />
    </div>
  );
}