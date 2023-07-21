const info = {
    hddb:{
        topad: {
            adtitle: "Github 들어가서 작업능력 알아보기"
            , adsub: "클릭 시 깃 주소로 이동"
            , adlink: "https://github.com/dongsam-E"
        }
        , navi: [
            {
                nm: ["About Me", "#aboutMe"]
                , cls: "aboutMe"
            }
            , {
                nm: ["Skills", "#skills"]
                , cls: "skills"
            }
            , {
                nm: ["Portfolio", "#portfolio"]
                , cls: "portfolio"
            }
            , {
                nm: ["사전 인터뷰", "#interview"]
                , cls: "interview"
            }
        ]
        , sns: [
            {
                adtitle: "Github",
                cls: "bi bi-github"
                , adlink: "https://github.com/dongsam-E/react-test"
            }
            // , {
            //     adtitle: "Notion",
            //     cls: "bi bi-journal"
            //     , adlink: "https://www.notion.so/dongsam-e/array-for-for-in-navi-66ed171b2f204f6fa9884aae1e57f9c9?pvs=4"
            // }
        ]
    }
    ,aboutdb:{
        icon: [
            {
                title: "이름"
                , i: "bi bi-person-fill"
                , content: "선주현"
            }
            , {
                title: "생년월일"
                , i: "bi bi-calendar-fill"
                , content: "97.12.15"
            }
            , {
                title: "주소지"
                , i: "bi bi-geo-alt-fill"
                , content: "경기도 성남시"
            }
            , {
                title: "연락처"
                , i: "bi bi-telephone-fill"
                , content: "010-2774-6352"
            }
            , {
                title: "이메일"
                , i: "bi bi-envelope-at-fill"
                , content: "dong2dong32@gmail.com"
            }
            , {
                title: "학력"
                , i: "bi bi-pencil-fill"
                , content: "숙명여자대학교(졸)"
            }

        ]
    }
    ,skillsdb:{
        skills: [
            {
                title: "FrontEnd"
            , boxCls: ""
            , img: "../img/skillFront.png"
            , imgcls: "w-100 mx-auto"
        }
            , {
                title: "Version Control"
            , boxCls: ""
            , img: "../img/skillVersion.png"
            , imgcls: "w-75 mx-auto"
        }
            , {
                title: "Communication"
            , boxCls: ""
            , img: "../img/skillCommu.png"
            , imgcls: "w-75 mx-auto"
        }
            , {
                title: "Certificate"
            , boxCls: ""
            , img: "../img/skillCert.png"
            , imgcls: "w-50 mx-auto"
        }
        ]
    }
    ,portdb:{
        card: [
            {
                subtitle: "Web-App"
                , title: `"반응형 최적화" 온가담 광고페이지`
                , hash: "#jquery #dothome #scss"
                , more: "홈페이지 바로가기"
                , img: "../img/port0.png"
                , imgcls: ""
                , cradcls: "py-3 px-5"
                , slidecls: "pb-5"
            }
            , {
                subtitle: "기획"
                , title: "신뢰감과 미니멀을 중점으로 기획한\n 소형가전 광고 페이지입니다."
                , hash: "#pigma #zeplin"
                , more: "피그마작업 바로가기"
                , img: "../img/port1.png"
                , imgcls: ""
                , cradcls: "py-3 px-5"
                , slidecls: ""
            }
            , {
                subtitle: ""
                , title: ""
                , hash: ""
                , more: ""
                , img: "../img/port2.png"
                , imgcls: ""
                , cradcls: ""
                , slidecls: ""
            }
            , {
                subtitle: ""
                , title: ""
                , hash: ""
                , more: ""
                , img: "../img/port3.png"
                , imgcls: ""
                , cradcls: ""
                , slidecls: ""
            }
            , {
                subtitle: ""
                , title: ""
                , hash: ""
                , more: ""
                , img: "../img/port4.png"
                , imgcls: ""
                , cradcls: ""
                , slidecls: ""
            }
        ]
        , card2: [
            {
                subtitle: "Web-App"
                , title: `"리액트"로 만든 포트폴리오`
                , hash: "#react #gitpage"
                , more: "자세히보기"
                , img: "../img/port0.png"
                , imgcls: ""
                , cradcls: "py-3 px-5"
                , slidecls: "pb-5"

            }
            , {
                subtitle: ""
                , title: ""
                , hash: ""
                , more: ""
                , img: "../img/port1.png"
                , imgcls: ""
                , cradcls: "py-3 px-5"
                , slidecls: ""
            }
            , {
                subtitle: ""
                , title: ""
                , hash: ""
                , more: ""
                , img: "../img/port2.png"
                , imgcls: ""
                , cradcls: ""
                , slidecls: ""
            }
            , {
                subtitle: ""
                , title: ""
                , hash: ""
                , more: ""
                , img: "../img/port3.png"
                , imgcls: ""
                , cradcls: ""
                , slidecls: ""
            }
            , {
                subtitle: ""
                , title: ""
                , hash: ""
                , more: ""
                , img: "../img/port4.png"
                , imgcls: ""
                , cradcls: ""
                , slidecls: ""
            }
        ]
    }
    ,interviewdb:{
        accordion: [
            {
                title: "사전인터뷰 타이틀0"
                , con: "내용입니다."
                , key: "0"
            }
            , {
                title: "사전인터뷰 타이틀1"
                , con: "내용입니다."
                , key: "1"
            }
            , {
                title: "사전인터뷰 타이틀2"
                , con: "내용입니다."
                , key: "2"
            }
        ]
    }
    ,contactdb:{
        checkbox: [
            {
                name: "Front-End"
                , title: "프론트엔드"
                , value: "프론트엔드"
            }
            , {
                name: "publisher"
                , title: "퍼블리셔"
                , value: "퍼블리셔"
            }
            , {
                name: "provider"
                , title: "기획/마케팅"
                , value: "기획/마케팅"
            }
            , {
                name: "designer"
                , title: "디자인"
                , value: "디자인"
            }
        ]
        , data: [
            {
                type: "text"
                , placeholder: "회사 명"
                , inputCls: "w-100"
                , name: "company"
            }
            , {
                type: "text"
                , placeholder: "담당자 명"
                , inputCls: "w-100"
                , name: "name"
            }
            , {
                type: "tel"
                , placeholder: "대표 번호"
                , inputCls: "w-100"
                , name: "num"
            }
            , {
                type: "text"
                , placeholder: "제안 내용"
                , inputCls: "w-100"
                , name: "text"
            }
        ]
        , submit: [
            , {
                type: "checkbox"
                , liCls: "d-flex justify-content-end py-3"
                , inputCls: ""
                , id: "policy"
                , value: "policy"
                , for: "policy"
                , label: "개인정보정책 약관 동의"
                , labelCls: "d-flex align-items-center"
            }
            , {
                type: "submit"
                , liCls: ""
                , inputCls: "w-100"
                , value: "면접 제안하기"
            }
        ]
    }
}

export default info