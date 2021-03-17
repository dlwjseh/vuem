const app = new Vue({
    el : '#app',
    template : `
        <div>
            <div class="srchbar_wrap" style="position:inherit;">
                <div class="srchbar input_txt">
                    <input v-model="search_keyword" type="search" title="검색어 입력" placeholder="검색어를 입력해주세요" class="srch_input">
                    <button v-if="search_keyword" class="btn_del"><i class="i_close"></i></button>
                </div>
            </div>

            <!-- 자동완성 -->
            <div v-if="search_keyword" class="srch_kwd_list type3">
                <h2>혹시 이런걸 찾고 있나요?</h2>
                <ul>
                    <li><a><b>{{search_keyword}}</b></a></li>
                    <li><a><b>{{search_keyword}}</b>이어리</a></li>
                    <li><a><b>{{search_keyword}}</b>이어리스티커</a></li>
                    <li><a><b>{{search_keyword}}</b>이어트</a></li>
                </ul>
            </div>

            <!-- 최근 검색어 -->
            <div class="srch_kwd_list type1">
                <h2>최근 검색어</h2>
                <ul>
                    <li><a>다이어리</a></li>
                    <li><a>아이패드 파우치</a></li>
                    <li><a>스누피</a></li>
                    <li><a>에어팟</a></li>
                </ul>
                <button class="btn_reset">모두 지우기</button>
            </div>

            <!-- 인기검색어 -->
            <div class="srch_kwd_list type2">
                <h2>많이 찾고 있어요 👀</h2>
                <ul>
                    <li><a>필통</a></li>
                    <li><a>운동화</a> <span class="label">hot</span></li>
                    <li><a>아기용품</a> </li>
                    <li><a>아이폰11프로 케이스</a> </li>
                    <li><a>에코백</a> </li>
                    <li><a>15인치노트북파우치</a> <span class="label">hot</span></li>
                    <li><a>마우스패드</a> <span class="label">hot</span></li>
                    <li><a>그립톡</a> </li>
                    <li><a>아이폰케이스</a> <span class="label">hot</span></li>
                    <li><a>1인용쇼파</a> <span class="label">new</span></li>
                </ul>
            </div>
        </div>
    `,
    data() {return {
        search_keyword : ''
    }},
});