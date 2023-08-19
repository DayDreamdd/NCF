var app = new Vue({
    el: '#app',
    data() {
        return {
            labelPosition: 'left',
            isExpanded: false,
            installStarted: false,
            installOptions: {
                systemName: "Default",
                adminUserName: "admin",
                dbConnectionString: "123"
            }
        }
    },
    methods: {
        toggleInfo() {
            this.isExpanded = !this.isExpanded;
        },
        saveOptions() {
        },
        submit() {
            if (installStarted) {
                alert('��װ�Ѿ��ڽ����У���ȴ�');
                return false;
            }

            if (!confirm('ȷ��Ҫ��ʼ��װ�𣿰�װ��ɺ��ҳ�潫ʧЧ��')) {
                return false;
            }

            installStarted = true;

            document.getElementById('install_form').submit();
            document.getElementById('btnInstall').setAttribute('disabled', true);
            document.getElementById('btnInstall').innerHTML = '��װ�����������Ժ󡭡�';

            return true;
        }
    }
})