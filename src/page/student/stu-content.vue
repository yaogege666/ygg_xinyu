<template>
    <div class="stu-content">
        <div class="stu-content-list">
            <div class="stu-content">
                <div class="stu-content-item">
                    <div class="stu-content-item">姓名:{{student.name}}</div>
                    <div class="stu-content-item">学号 :{{student.code}}</div>

                </div>
            </div>
            <div class="stu-content">
                <div class="stu-content-item">班级：{{student.className}}</div>
            </div>
            <div class="stu-content">
                <div class="stu-content-item">电话号码 :{{student.tel}}</div>
            </div>
            <div class="stu-content">
                <div class="stu-content-item">
                    <div class="stu-content-item">综合信誉考评成绩 :</div>
                </div>
            </div>
        </div>
        <stu-echart/>


    </div>
</template>
<script>
    import StuEchart from "./stu-echart";
    import Stu_absence from "./stu-leave";
    import Stu_absence_list from "./stu-leave-list";
    import StuScore from "./stu-score";

    export default {
        name: "stu_content",
        components: {StuScore, Stu_absence_list, Stu_absence, StuEchart},
        data() {
            return {
                student: user,
            }
        },
    }
</script>

<style lang="scss">
    .stu-content {
        width: 100%;
        background-color: #eef5f9;
        color: #0a0a26;
        box-sizing: border-box;
        .stu-content-list {
            width: 100%;
            height: 156px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            background-color: white;
            box-shadow: 3px 3px 5px #ddd;
            margin-bottom: 12px;

            .stu-content {
                height: 100px;
                flex: 1;
                background-color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                .stu-content-item {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                }

                &:not(:last-child) {
                    border-right: solid #e8e8e8 1px;
                }
            }

        }

    }
</style>
