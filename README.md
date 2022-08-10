# CCSTRAP__PMG Korea 사이트 제작 컨벤션 📖 
> Date. 2021.05.12 (최종수정일 2021.08.03)   
> [CCSTRAP 메인페이지](https://pmgkr.github.io/ccstrap/)


## github 브랜치 가이드 (sourcetree 기준) ✍
자세한 내용은 [PMG 퍼블리싱 가이드 컨벤션_Git 가이드](https://pmgkr.github.io/ccstrap/convention/index.html#git) 📋
1. 작업 전 pull로 내려받아 개인 pc의 local 프로젝트는 항상 최신 상태 유지(pull로 내려받기 습관화 하기)
1. 새 브랜치는 main(master)을 부모 브랜치로 생성(기존 브랜치에서 추가로 생성도 가능하나 추천하지 않음, 추후 병합시 과거 내역으로 병합될 가능성 있음.)
1. 새 브랜치 네이밍 규칙
    - 작업날짜_간략 작업 내용(한글가능)
    - 간략 작업 내용은 띄어쓰기 지양
    - ex) `210524_readme브랜치내용추가`
1. 새 브랜치 생성 후 가져오기 위한 원격 브랜치 main(master)로 설정하여 pull로 내려받아 프로젝트 최신 상태로 만들어 주기
1. 브랜치내 작업 완료 시 다시 한번 pull로 main(master)의 소스 내려받기    
1. main(master) 소스와 충돌이 없을 시 작업 파일 스테이지에 올리기
1. 스테이지 파일 작업 브랜치에 커밋 메시지 적고 커밋 하기
1. 커밋 완료 후 main(master)과 병합
1. 병합 완료 후 main(master) 브랜치 pull로 최신 소스 내려받기
1. main(master) 브랜치에서 병합 버튼눌러 작업 브랜치와 main(master) 브랜치 병합
1. github에 작업 내용이 Pull Request로 추가 되었는지 확인하여 Pull Request 눌러서 소스 합치기
1. 작업 내용이 정상적으로 업로드 되었는지 확인 후 작업 종료


* * *
<br/>

## 퍼블리싱 가이드 ✍
자세한 내용은 [PMG 퍼블리싱 가이드 컨벤션 (https://pmgkr.github.io/ccstrap/convention/)](https://pmgkr.github.io/ccstrap/convention/) 📋


* ie는 10이상 대응(Internet Explorer 11 최종 지원 종료: 2022년 6월 15일)
* logo는 `<h1><img src=""></h1>가 아닌 <h1>site name</h1>`에 background-image로 svg작업(검색엔진 최적화 및 logo 이미지 깨짐 방지)
* 태그명, 속성명, 속성값 등에 모두 소문자를 사용한다. HTML 속성값에는 반드시 큰따옴표 ("")를 사용한다.
* 모든 파일(HTML, CSS, Javascript ...)의 들여쓰기(depth)는 `공백(space) 4칸`을 사용한다.

<br/>

> ### SCSS
* 최상단에 주석으로 version, 최초 작성일, 작업자명 작성
* CSS 작업시 따옴표는 `""(큰 따옴표)`가 아닌 `''(작은 따옴표)` 사용한다.   

> ### Koala (SCSS 컴파일러)
* source map 사용 안 함
* 배포 시 컴파일 output style: compressed(압축-minify)로 컴파일한다.   

> ### BEM 방식 (Naming Convention)
* **Block__Element__Modifier**로 '`__`' 더블 언더바로 연결한다.
* 단어 사이는 '`_`' 단일 언더바로 연결해서 사용한다. 
    - `form__button__disabled` `form__button__focused` `nav__item` `search_form__title`
* 함수는 접두어 '`fn_`'을 사용해서 변수명을 결정한다.
* 변수는 '`_`' 단일 언더바를 이용해 단어를 연결해서 사용한다.   

<br/>

> ### 폴더 구조 & CSS 구조 
```
/Site root
    ㄴ dist
        ㄴ css
            - scss
        ㄴ fonts (CDN 지양)
        ㄴ js
        ㄴ plugin(lib__CDN 지양)
    ㄴ images (static)
        ㄴ icon
    ㄴ img (site)
    ㄴ *.html
```

각 페이지의 헤드에 삽입하는 스타일은 2개의 스타일이다.   
공통 스타일의 **default.css** 와 해당 페이지 컨텐츠의 스타일을 담은 main.css (혹은 sub.css ...)를 선언한다. 
`<head>`에서 스타일 선언 처리는 조건문이나 스크립트 등을 이용해 처리한다. 

```
/CSS
    /SCSS
        ㄴ default.scss (=default.css)
            - _reset.scss           

            ㄴ config.scss
                ㄴ global.scss (main/subpage css에도 import해서 사용)
                    - _fonts.scss
                    - _variables.scss
                    - _mixin.scss
                    - _grid.scss

                ㄴ modules.scss (프로젝트 내용에 따라 import 내용 유동적으로 관리)
                    - _form.scss
                    - _button.scss
                    - _board.scss (_pagination 포함)
                    - _tooltip.scss
                    - _popup.scss
                    - _category.scss
                    - _search.scss
                    - _table.scss
                    - _quick_banner.scss (index 배너 레이어팝업 전용 스타일)
                    ...
                ㄴ ui.scss
                    - _navigation.scss
                    - _quick_menu.scss
                - header.scss
                - footer.scss
                ㄴ admin.scss (추후 작업)

            ㄴ responsive.scss (tablet, mobile, widescreen ...)
            
    - default.css (default.scss 최종 컴파일된 스타일)
    - 페이지 별 스타일 (main.css / sub.css / order.css ...)
    - 페이지 별 스타일에 global.scss 별도로 import 해야 mixin 사용이 가능 (ex. whalebook scss 구조에서 확인 가능)
```   
<br/>

> ### Grid Layout
* **모바일 ( ~ 480px)**
    - 컬럼 수 : 6
    - 그리드 적용 : 분기점보다 작거나 같으면 적용 @media screen and (max-width:480px)
    - 클래스 : .col_sm_1 ~ .col_sm_6 (_pull, _push, _offset)
* **태블릿 (481 ~ 768px)**
    - 컬럼 수 : 12
    - 그리드 적용 : 분기점보다 작거나 같으면 적용 @media screen and (max-width:768px)
    - 클래스 : .col_md_1 ~ .col_md_12 (_pull, _push, _offset)
* **작은 데스크탑 or 큰 태블릿 (769 ~ 1199px)**
    - 컬럼 수 : 12
    - 그리드 적용 : 분기점보다 작거나 같으면 적용 @media screen and (max-width:1199px)
    - 클래스 : .col_lg_1 ~ .col_lg_12 (_pull, _push, _offset)
*  **데스크탑 (1200 ~ 1920px) default**
    - 컬럼 수 : 12
    - 그리드 적용 : 기본 적용 (다른 분기점에 속하지 않을 때)
    - 클래스 : .col_xl_1 ~ .col_xl_12 (_pull, _push, _offset)
* **와이드 (1921px ~)**
    - 컬럼 수 : 12
    - 그리드 적용 : 분기점보다 크면 적용 @media screen and (min-width:1921px)
    - 클래스 : .col_wide_1 ~ .col_wide_12 (_pull, _push, _offset)