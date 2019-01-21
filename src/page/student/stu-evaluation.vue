<template>
    <div class="stu-content-evaluation">
        <div class="stu-evaluation">
            <div class="stu-evaluation-tea">
                <div class="tea-image"><img src="../student/image/1.jpg"></div>
                <div class="tea-detail">
                    <div class="h4">jack老师</div>
                    <div>数学老师</div>
                </div>
                <div class="tea-time">
                    <span>Today at 4:24 AM</span>
                </div>
            </div>
            <div class="stu-evaluation-score">
                <span>&nbsp;&nbsp;&nbsp;  score</span>
                <div class="score">
                    <div class="score-attain"></div>
                </div>
            </div>
        </div>
        <div class="stu-evaluation">
            <div class="stu-evaluation-tea">
                <div class="tea-image"><img src="../student/image/1.jpg"></div>
                <div class="tea-detail">
                    <div class="h4">jack老师</div>
                    <div>数学老师</div>
                </div>
                <div class="tea-time">
                    <span>Today at 4:24 AM</span>
                </div>
            </div>
            <div class="stu-evaluation-score">
                <span>&nbsp;&nbsp;&nbsp;  score</span>
                <div class="score">
                    <div class="score-attain"></div>
                </div>
            </div>
        </div>
        <div class="stu-evaluation">
            <div class="stu-evaluation-tea">
                <div class="tea-image"><img src="../student/image/1.jpg"></div>
                <div class="tea-detail">
                    <div class="h4">jack老师</div>
                    <div>数学老师</div>
                </div>
                <div class="tea-time">
                    <span>Today at 4:24 AM</span>
                </div>
            </div>
            <div class="stu-evaluation-score">
                <span>&nbsp;&nbsp;&nbsp;  score</span>
                <div class="score">
                    <div class="score-attain"></div>
                </div>
            </div>
        </div>
        <div class="stu-evaluation">
            <div class="stu-evaluation-tea">
                <div class="tea-image"><img src="../student/image/1.jpg"></div>
                <div class="tea-detail">
                    <div class="h4">jack老师</div>
                    <div>数学老师</div>
                </div>
                <div class="tea-time">
                    <span>Today at 4:24 AM</span>
                </div>
            </div>
            <div class="stu-evaluation-score">
                <span>&nbsp;&nbsp;&nbsp;  score</span>
                <div class="score">
                    <div class="score-attain"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "stu-evaluation"
    }
</script>

<style lang="scss">
    .stu-content-evaluation {
        width: 100%;
        height: 400px;
        margin-top:80px;
        background-color: #eef5f9;
        .stu-evaluation {
            width: 1200px;
            height: 100px;
            border: solid 1px #f9fffd;
            box-shadow: 3px 3px 5px #ddd;
            margin-top: 10px;
            background-color: #ffffff;
            .stu-evaluation-tea {
                width: 50%;
                height: 80px;
                display: flex;
                align-items: center;
                margin-top: 10px;
                border-right: solid #e8e8e8 1px;
                float: left;
                background-color: #ffffff;
                .tea-image {
                    width: 80px;
                    height: 80px;
                    background-color: wheat;
                    margin-left: 10px;
                     img {
                        width: 80px;
                        height: 80px;
                    }
                }
                .tea-detail {
                    color: blueviolet;
                    width: 220px;
                    height: 80px;
                    padding: 10px;
                    margin: 10px;
                    display: flex;
                    align-items: center;
                    .h4 {
                        width: 100px;
                        font-weight: bold;
                        margin-right: 20px;
                    }

                }
                .tea-time {
                    width: 150px;
                    height: 30px;
                    display: flex;
                    align-items:center;
                    margin-left: 140px;
                    justify-content: end;
                }
            }
            .stu-evaluation-score {
                width: 50%;
                height: 80px;
                margin-top: 10px;
                float: right;
                display: flex;
                align-items: center;
                background-color: #ffffff;
                .score {
                    width: 400px;
                    height: 5px;
                    margin-left: 80px;
                    border-radius: 15px;
                    background-color: #e9ecef;
                    .score-attain {
                        width: 250px;
                        height: 5px;
                        border-radius: 15px;
                        background-color: #ff7676;
                    }
                }
            }

        }

    }
</style>
