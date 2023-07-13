const contactDB = {
    checkbox: [
        {
            name: "radio0"
            ,title: "프론트엔드"
        }
        ,{
            name: "radio1"
            ,title: "퍼블리셔"
        }
        ,{
            name: "radio2"
            ,title: "기획/마케팅"
        }
        ,{
            name: "radio3"
            ,title: "디자인"
        }
    ]
    ,data: [
        {
            type: "text"
            ,placeholder: "회사 명"
            ,liCls: ""
            ,inputCls: "w-100"
            ,value: ""
        }
        ,{
            type: "text"
            ,placeholder: "담당자 명"
            ,liCls: ""
            ,inputCls: "w-100"
            ,value: ""
        }
        ,{
            type: "tel"
            ,placeholder: "대표 번호"
            ,liCls: ""
            ,inputCls: "w-100"
            ,value: ""
        }
        ,{
            type: "text"
            ,placeholder: "제안 내용"
            ,liCls: ""
            ,inputCls: "w-100"
            ,value : ""
        }
        ,{
            type: "checkbox"
            ,placeholder: ""
            ,liCls: "d-flex justify-content-end py-3"
            ,inputCls: ""
            ,id: "policy"
            ,value: "policy"
            ,for: "policy"
            ,label: "개인정보정책 약관 동의"
            ,labelCls: "ps-3"
        }
        ,{
            type: "submit"
            ,placeholder: ""
            ,liCls: ""
            ,inputCls: "w-100"
            ,value : "면접 제안하기"
        }
    ]
}

export default contactDB