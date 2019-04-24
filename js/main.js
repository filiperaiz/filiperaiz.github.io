var vm = new Vue({
  el: '#app',
  data: {
    logo: 'img/logo.png',
    errors: [],
    email: '',
    password: '',
    success: false,
    hidePassword: true,
    copyright: '© Linx 2019. Todos os direitos reservados.'
  },
  computed: {
    passwordType: function passwordType() {
      return this.hidePassword ? 'password' : 'text';
    },
    passwordIcon: function passwordIcon() {
      return this.hidePassword ? 'fa-eye' : 'fa-eye-slash';
    },
    isValid: function isValid() {
      return this.email !== '' && this.password !== '';
    }
  },
  methods: {
    doLogin: function doLogin(e) {
      this.errors = [];
      this.validEmail(this.email);
      this.validPassword(this.password);

      if (!this.errors.length) {
        this.success = true;
      }

      e.preventDefault();
    },
    validEmail: function validEmail(email) {
      var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!regex.test(email)) {
        this.errors.push('Utilize um e-mail válido.');
      }
    },
    validPassword: function validPassword(password) {
      var rules = [{
        message: 'Mínimo de 8 caracteres',
        regex: /.{8,}/
      }, {
        message: 'Pelo menos um número',
        regex: /[0-9]+/
      }, {
        message: 'Pelo menos uma letra maiúscula',
        regex: /[A-Z]+/
      }];

      for (var _i = 0, _rules = rules; _i < _rules.length; _i++) {
        var condition = _rules[_i];

        if (!condition.regex.test(password)) {
          this.errors.push(condition.message);
        }
      }
    }
  }
});