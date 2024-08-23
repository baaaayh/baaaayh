export default function Intro() {
    return (
        <div className="intro-view">
            <div className="intro-view__main">
                <figure className="intro-view__figure">
                    <img src="/images/common/kimjh.jpg" alt="Kim Joo Hyung" />
                </figure>
                <div className="intro-view__intro">
                    <h2>
                        책임감, 끈기, 발전하고 있는
                        <br /> 웹 퍼블리셔 김주형.
                    </h2>
                    <p>
                        안녕하세요, 웹 퍼블리셔 김주형입니다. 구조나 흐름에 대해
                        분석하는 것, 문제 해결하는 것을 좋아해 어려운 문제라도
                        끈기 있게 해결해 왔습니다. 앞으로 도전 정신과 끈기를
                        바탕으로 웹 퍼블리셔를 넘어 완성형 프론트엔드 개발자로
                        나아가는 것이 목표입니다.
                    </p>
                </div>
            </div>
            <div className="intro-view__history">
                <h3 className="intro-view__subject">Work Experience</h3>
                <div className="intro-view__work">
                    <ul>
                        <li>
                            <h4>비닷크리에이티브</h4>
                            <span>웹 퍼블리셔 · 2023. 08 ~</span>
                            <p>
                                웹 구축 / 운영 업무를 수행했습니다. 특히 웹
                                인터랙션에 대한 업무와 사이트 리뉴얼 작업을 주로
                                진행했습니다.
                            </p>
                        </li>
                        <li>
                            <h4>가피아</h4>
                            <span>웹 퍼블리셔 · 2022. 03 ~ 2023. 01</span>
                            <p>
                                웹 접근성 획득 프로젝트를 진행했고, 더불어 CMS,
                                LMS 등 공공 기관 등의 구축/유지·보수 프로젝트를
                                수행했습니다.
                            </p>
                        </li>
                        <li>
                            <h4>윈코커뮤니케이션</h4>
                            <span>웹 퍼블리셔 · 2020. 02 ~ 2021. 02</span>
                            <p>
                                다양한 디자인과 플러그인등을 사용한 기업들의 웹
                                페이지 구축/유지·보수 프로젝트를 수행했습니다.
                            </p>
                        </li>
                        <li>
                            <h4>오픈필드</h4>
                            <span>웹 퍼블리셔 · 2019. 05 ~ 2019. 07</span>
                            <p>
                                일반 기업들의 웹 페이지 구축 프로젝트를
                                수행했습니다.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="intro-view__history">
                <h3 className="intro-view__subject">Other Experience</h3>
                <div className="intro-view__work">
                    <ul>
                        <li>
                            <h4>디자인쏘울</h4>
                            <span>SNS 홍보 · 2017. 09 ~ 2018. 03</span>
                            <p>
                                이미지 편집, SNS 홍보 등의 업무를 수행했습니다.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
