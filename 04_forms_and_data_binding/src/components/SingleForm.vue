<template>
    <div class="col-md-6 mx-auto">
        <div class="card p-5">
            <form @submit.prevent="handleSubmit" action="">
                <div class="mb-3">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" v-model="name" id="name" autofocus>
                </div>

                <div class="mb-3">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" v-model="email" id="email">
                </div>

                <div class="mb-3">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" v-model="password" id="password">
                </div>

                <div class="mb-3">
                    <label for="role">Role</label>
                    <select class="form-control" id="role" v-model="role">
                        <option value="web-designer">Web Designer</option>
                        <option value="web-developer">Web Developer</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="skills">Skills</label>
                    <input type="text" class="form-control" id="skills" v-model="tempSkill" @keyup="addSkill">

                    <span class="skill badge bg-success mx-1" 
                    v-for="skill in skills"
                     @click="deleteSkill(skill)">
                        {{ skill }}
                    </span>
                </div>

                <button type="submit" class="btn btn-secondary">Submit</button>
            </form>

            <hr>
            <p>Name: {{ name }}</p>
            <p>Email: {{ email }}</p>
            <p>Password: {{ password }}</p>
            <p>Role: {{ role }}</p>
            <p>Skills: {{ skills }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            role: 'web-designer',
            skills: [],
            tempSkill: ''
        }
    },
    methods: {
        addSkill(e) {
            if (e.key === "Enter" && this.tempSkill) {

                if (!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill)
                }

                this.tempSkill = ''
            }
        },
        deleteSkill(skill) {
            this.skills = this.skills.filter(item => item !== skill);
        },
        handleSubmit() {
            if(this.password.length === 0) alert("Password must be fill");
            console.log("Form submitted");
        }   
    }
}
</script>

<style>
.skill {
    cursor: pointer;
}
</style>