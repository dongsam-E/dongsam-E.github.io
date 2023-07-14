const contactDB = {
    checkbox: [
        {
            name: "checkbox0"
            ,title: "프론트엔드"
        }
        ,{
            name: "checkbox1"
            ,title: "퍼블리셔"
        }
        ,{
            name: "checkbox2"
            ,title: "기획/마케팅"
        }
        ,{
            name: "checkbox3"
            ,title: "디자인"
        }
    ]
    ,data: [
        {
            type: "text"
            ,placeholder: "회사 명"
            ,inputCls: "w-100"
        }
        ,{
            type: "text"
            ,placeholder: "담당자 명"
            ,inputCls: "w-100"
        }
        ,{
            type: "tel"
            ,placeholder: "대표 번호"
            ,inputCls: "w-100"
        }
        ,{
            type: "text"
            ,placeholder: "제안 내용"
            ,inputCls: "w-100"
        }
    ]
    ,submit :[
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

export default contactDB