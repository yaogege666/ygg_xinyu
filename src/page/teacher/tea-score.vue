<template>
    <div  class="tea-score">
        <span class="tea-score-header">&nbsp;&nbsp;学生的记录和考评</span>
        <el-form
                ref="form"
                :model="form"
                label-width="80px"
                style="width: 95%;margin: 20px"
        >
            <el-form-item label="学生姓名">
                <el-input v-model="form.name" style="width: 100px"></el-input>
            </el-form-item>
            <el-form-item label="学生班级">
                <el-select v-model="form.class" placeholder="请选择班级">
                    <el-option label="软件151" value="151"></el-option>
                    <el-option label="软件152" value="152"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="记录时间">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2"></el-col>
            </el-form-item>
            <el-form-item label="是否警告">
                <el-switch v-model="form.isWarn"></el-switch>
            </el-form-item>
            <el-form-item label="问题性质">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="上课打游戏" name="type"></el-checkbox>
                    <el-checkbox label="上课看电影" name="type"></el-checkbox>
                    <el-checkbox label="不认真听讲" name="type"></el-checkbox>
                    <el-checkbox label="表现良好，且成绩优异" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="学生性质">
                <el-radio-group v-model="form.nature">
                    <el-radio label="问题学生"></el-radio>
                    <el-radio label="优秀学生"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="老师建议">
                <el-input type="textarea" v-model="form.suggestions"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交记录考评</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "tea-score",
        data() {
            return {
                form: {
                    name: '',
                    class: '',
                    date: '',
                    isWarn: false,
                    type: [],
                    nature: '',
                    suggestions: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style lang="scss">
    .tea-score {
        width: 1050px;
        height: 500px;
        margin: 20px 40px;
        background-color: #ffffff;
        .tea-score-header {
            color: red;
            font-size: 25px;
        }
    }
</style>
