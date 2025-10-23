import { gameData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  const pages = document.querySelectorAll('.page');
  const sidebar = document.getElementById('sidebar');
  const loadingScreen = document.getElementById('loading-screen');
  const actionLoading = document.getElementById('action-loading');
  const loadingMessage = document.getElementById('loading-message');
  const notificationContainer = document.getElementById('notification-container');

  const avatars = [
    'fa-user-circle', 'fa-user-astronaut', 'fa-user-ninja', 'fa-user-secret',
    'fa-cat', 'fa-dog', 'fa-dragon', 'fa-hippo', 'fa-otter', 'fa-robot'
  ];

  // --- SETTINGS MANAGEMENT ---
  const defaultSettings = {
    music: false,
    sfxVolume: 0.5,
    theme: 'light'
  };

  let currentSettings = {};

  function saveSettings() {
    localStorage.setItem('edu_settings', JSON.stringify(currentSettings));
  }

  function applyTheme(theme) {
    document.body.className = `theme-${theme}`;
    document.querySelectorAll('.theme-option').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === theme);
    });
  }

  function loadSettings() {
    const savedSettings = JSON.parse(localStorage.getItem('edu_settings') || 'null');
    currentSettings = { ...defaultSettings, ...savedSettings };

    // Apply loaded settings to UI
    applyTheme(currentSettings.theme);
    const musicToggle = document.getElementById('music-toggle');
    const sfxVolume = document.getElementById('sfx-volume');
    if (musicToggle) musicToggle.checked = currentSettings.music;
    if (sfxVolume) sfxVolume.value = currentSettings.sfxVolume;
  }


  function showNotification(title, message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;

    let iconClass = 'fa-info-circle';
    if (type === 'success') iconClass = 'fa-check-circle';
    if (type === 'error') iconClass = 'fa-exclamation-circle';

    notification.innerHTML = `
      <div class="notification-icon">
        <i class="fas ${iconClass}"></i>
      </div>
      <div class="notification-content">
        <div class="notification-title">${title}</div>
        <div class="notification-message">${message}</div>
      </div>
    `;
    notificationContainer.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('show');
    }, 100);

    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 400);
    }, 4500);
  }

  function showLoading(message = 'Please wait...') {
    loadingMessage.textContent = message;
    actionLoading.classList.remove('hidden');
  }

  function hideLoading() {
    actionLoading.classList.add('hidden');
  }

  function showPage(pageId) {
    pages.forEach(p => p.classList.remove('active'));
    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
      targetPage.classList.add('active');
      if (pageId === 'profile') {
        renderProfile();
      }
    }
    sidebar.classList.remove('open');
  }

  // Initial Load
  loadSettings();
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
    setTimeout(() => {
      loadingScreen.style.display = 'none';
      const isLoggedIn = localStorage.getItem('edu_logged');
      showPage(isLoggedIn ? 'dashboard' : 'login');
    }, 600);
  }, 1500);

  document.querySelectorAll('.open-nav').forEach(btn => {
    btn.addEventListener('click', () => {
      sidebar.classList.add('open');
    });
  });

  document.getElementById('close-nav').addEventListener('click', () => {
    sidebar.classList.remove('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = e.currentTarget.getAttribute('data-page');
      if (page === 'login') {
        handleLogout();
      } else if (page) {
        showPage(page);
      }
    });
  });

  document.querySelectorAll('.toggle-pw').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const input = e.currentTarget.previousElementSibling;
      if (input && input.tagName === 'INPUT') {
        const type = input.type === 'password' ? 'text' : 'password';
        input.type = type;
        const icon = e.currentTarget.querySelector('i');
        if (icon) {
          icon.classList.toggle('fa-eye');
          icon.classList.toggle('fa-eye-slash');
        }
      }
    });
  });

  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleLogin();
    });
  }

  function handleLogin() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (!email || !password) {
      showNotification('Missing Information', 'Please fill in all fields to continue.', 'error');
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem('edu_user') || 'null');
    const demoUser = {
      email: 'demo@edufun.com',
      password: 'demo123',
      username: 'Demo User',
      gender: 'Other',
      avatar: 'fa-user-circle'
    };

    const isValidUser =
      (storedUser && storedUser.email === email && storedUser.password === password) ||
      (email === demoUser.email && password === demoUser.password);

    if (!isValidUser) {
      showNotification('Invalid Password', 'The password you entered is incorrect. Please try again.', 'error');
      return;
    }

    showLoading('Logging in...');

    setTimeout(() => {
      localStorage.setItem('edu_logged', '1');
      if (!storedUser && email === demoUser.email) {
        localStorage.setItem('edu_user', JSON.stringify(demoUser));
      }
      hideLoading();
      showPage('dashboard');
      showNotification('Welcome Back!', `You're now logged in to EduFun.`, 'success');
    }, 1500);
  }

  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleRegister();
    });
  }

  function handleRegister() {
    const email = document.getElementById('reg-email').value.trim();
    const username = document.getElementById('reg-username').value.trim();
    const gender = document.getElementById('reg-gender').value;
    const password = document.getElementById('reg-password').value.trim();

    if (!email || !username || !gender || !password) {
      showNotification('Missing Information', 'Please fill in all fields to continue.', 'error');
      return;
    }

    if (password.length < 6) {
      showNotification('Weak Password', 'Your password must be at least 6 characters long.', 'error');
      return;
    }

    const user = { email, username, gender, password, avatar: 'fa-user-circle' };
    localStorage.setItem('edu_user', JSON.stringify(user));

    showLoading('Creating your account...');
    setTimeout(() => {
      hideLoading();
      showNotification('Registration Successful', 'Your account has been created! You can now log in.', 'success');
      showPage('login');
      document.getElementById('login-email').value = email;
    }, 1500);
  }

  document.getElementById('go-register').addEventListener('click', (e) => {
    e.preventDefault();
    showPage('register');
  });

  document.getElementById('go-login').addEventListener('click', (e) => {
    e.preventDefault();
    showPage('login');
  });

  document.getElementById('back-button').addEventListener('click', () => {
    showPage('login');
  });

  function handleLogout() {
    showLoading('Logging out...');
    setTimeout(() => {
      localStorage.removeItem('edu_logged');
      hideLoading();
      showPage('login');
      document.getElementById('login-email').value = '';
      document.getElementById('login-password').value = '';
    }, 1200);
  }

  document.getElementById('logout-btn').addEventListener('click', handleLogout);

  let currentGameId = null;
  let currentQuestionIndex = 0;
  let score = 0;
  let mistakes = 0;

  const questionText = document.getElementById('question-text');
  const answersContainer = document.getElementById('answers-container');
  const feedbackContainer = document.getElementById('feedback-container');
  const nextBtn = document.getElementById('next-question-btn');
  const gameTitle = document.getElementById('game-title');
  const gameSubtitle = document.getElementById('game-subtitle');
  const questionCounter = document.getElementById('question-counter').querySelector('span');
  const mistakesCounter = document.getElementById('mistakes-counter').querySelector('span');
  const hintBtn = document.getElementById('hint-btn');
  const hintContainer = document.getElementById('hint-container');

  document.querySelectorAll('.play-game-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const gameId = e.currentTarget.getAttribute('data-game');
      if (gameId && gameData[gameId]) {
        startGame(gameId);
      }
    });
  });

  function startGame(gameId) {
    currentGameId = gameId;
    currentQuestionIndex = 0;
    score = 0;
    mistakes = 0;

    const game = gameData[gameId];
    gameTitle.textContent = game.title;
    gameSubtitle.textContent = `Answer ${game.questions.length} questions`;

    showPage('game');
    loadQuestion();
  }

  function loadQuestion() {
    if (!currentGameId) return;

    const game = gameData[currentGameId];
    const question = game.questions[currentQuestionIndex];

    questionText.textContent = question.question;
    questionCounter.textContent = `${currentQuestionIndex + 1}/${game.questions.length}`;
    mistakesCounter.textContent = `${mistakes}/5`;

    answersContainer.innerHTML = '';
    feedbackContainer.innerHTML = '';
    nextBtn.classList.remove('visible');
    nextBtn.style.display = 'none';

    hintContainer.classList.add('hidden');
    hintContainer.innerHTML = '';
    hintBtn.innerHTML = '<i class="fas fa-lightbulb"></i><span>Show Hint</span>';
    hintBtn.style.display = question.hint ? 'inline-flex' : 'none';

    question.answers.forEach(answer => {
      const btn = document.createElement('button');
      btn.className = 'answer-btn';
      btn.textContent = answer;
      btn.addEventListener('click', () => checkAnswer(btn, question.correct));
      answersContainer.appendChild(btn);
    });
  }

  hintBtn.addEventListener('click', () => {
    const game = gameData[currentGameId];
    const question = game.questions[currentQuestionIndex];

    if (hintContainer.classList.contains('hidden')) {
      hintContainer.textContent = question.hint || 'No hint available';
      hintContainer.classList.remove('hidden');
      hintBtn.innerHTML = '<i class="fas fa-eye-slash"></i><span>Hide Hint</span>';
    } else {
      hintContainer.classList.add('hidden');
      hintBtn.innerHTML = '<i class="fas fa-lightbulb"></i><span>Show Hint</span>';
    }
  });

  function checkAnswer(btn, correctAnswer) {
    const allButtons = answersContainer.querySelectorAll('.answer-btn');
    allButtons.forEach(b => b.disabled = true);

    if (btn.textContent === correctAnswer) {
      btn.classList.add('correct');
      feedbackContainer.innerHTML = '<div style="color: #10b981; font-size: 20px;"><i class="fas fa-check-circle"></i> Correct! Well done!</div>';
      score++;
    } else {
      btn.classList.add('incorrect');
      mistakes++;
      mistakesCounter.textContent = `${mistakes}/5`;
      feedbackContainer.innerHTML = `<div style="color: #ef4444; font-size: 20px;"><i class="fas fa-times-circle"></i> Incorrect! The answer is: ${correctAnswer}</div>`;

      allButtons.forEach(b => {
        if (b.textContent === correctAnswer) {
          b.classList.add('correct');
        }
      });

      if (mistakes >= 5) {
        showNotification('Game Over', 'You\'ve made too many mistakes. The game will restart.', 'error');
        setTimeout(() => startGame(currentGameId), 2000);
        return;
      }
    }

    nextBtn.style.display = 'inline-flex';
    setTimeout(() => {
      nextBtn.classList.add('visible');
    }, 100);
  }

  nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    const game = gameData[currentGameId];

    if (currentQuestionIndex < game.questions.length) {
      loadQuestion();
    } else {
      showGameResults();
    }
  });

  function showGameResults() {
    const game = gameData[currentGameId];
    const percentage = Math.round((score / game.questions.length) * 100);

    let emoji = '🎉';
    let message = 'Excellent!';

    if (percentage < 40) {
      emoji = '📚';
      message = 'Keep practicing!';
    } else if (percentage < 70) {
      emoji = '👍';
      message = 'Good job!';
    }

    questionText.textContent = `${emoji} Game Over! ${message}`;
    questionCounter.textContent = `Final Score`;

    answersContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 16px;">
        <div style="font-size: 48px; font-weight: 700; margin-bottom: 16px;">${score} / ${game.questions.length}</div>
        <div style="font-size: 24px; font-weight: 600; margin-bottom: 8px;">${percentage}%</div>
        <div style="font-size: 16px; opacity: 0.9;">Questions answered correctly</div>
      </div>
    `;

    feedbackContainer.innerHTML = '';
    nextBtn.style.display = 'none';
  }

  document.getElementById('back-to-dashboard').addEventListener('click', () => {
    showPage('dashboard');
  });

  function renderProfile() {
    const user = JSON.parse(localStorage.getItem('edu_user') || 'null') || {
      username: 'Demo User',
      email: 'demo@edufun.com',
      gender: 'Other',
      avatar: 'fa-user-circle'
    };

    document.getElementById('profile-username').textContent = user.username;
    document.getElementById('profile-email').textContent = user.email;
    document.getElementById('profile-gender').textContent = user.gender;
    document.getElementById('profile-username-display').textContent = user.username;
    document.getElementById('profile-email-display').textContent = user.email;

    const avatarDisplay = document.getElementById('profile-avatar-display');
    avatarDisplay.innerHTML = `<i class="fas ${user.avatar}"></i>`;

    renderAvatarOptions();
  }

  function renderAvatarOptions() {
    const user = JSON.parse(localStorage.getItem('edu_user') || '{}');
    const avatarOptionsContainer = document.getElementById('avatar-options');
    avatarOptionsContainer.innerHTML = '';

    avatars.forEach(avatarClass => {
      const btn = document.createElement('button');
      btn.className = 'avatar-option';
      if (user.avatar === avatarClass) {
        btn.classList.add('selected');
      }
      btn.innerHTML = `<i class="fas ${avatarClass}"></i>`;
      btn.addEventListener('click', () => selectAvatar(avatarClass));
      avatarOptionsContainer.appendChild(btn);
    });
  }

  function selectAvatar(avatarClass) {
    let user = JSON.parse(localStorage.getItem('edu_user') || '{}');
    user.avatar = avatarClass;
    localStorage.setItem('edu_user', JSON.stringify(user));
    renderProfile();
    showNotification('Avatar Updated', 'Your profile picture has been changed successfully.', 'success');
  }

  document.getElementById('randomize-avatar-btn').addEventListener('click', () => {
    const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
    selectAvatar(randomAvatar);
  });

  document.getElementById('profile-btn').addEventListener('click', () => {
    showPage('profile');
  });

  ['login-email', 'login-password'].forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleLogin();
        }
      });
    }
  });

  document.addEventListener('click', (e) => {
    if (sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) &&
        !e.target.closest('.open-nav')) {
      sidebar.classList.remove('open');
    }
  });


  // --- NEW SETTINGS EVENT LISTENERS ---

  // Sound & Music Controls
  document.getElementById('music-toggle').addEventListener('change', (e) => {
    currentSettings.music = e.target.checked;
    saveSettings();
    showNotification(
      e.target.checked ? 'Music Enabled' : 'Music Disabled',
      e.target.checked ? 'Background music is now turned on.' : 'Background music is now turned off.',
      'info'
    );
  });

  document.getElementById('sfx-volume').addEventListener('input', (e) => {
    currentSettings.sfxVolume = e.target.value;
    saveSettings();
  });

  // Theme Selection
  document.querySelectorAll('.theme-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.theme;
      currentSettings.theme = theme;
      applyTheme(theme);
      saveSettings();
    });
  });

  // Data Management
  document.getElementById('reset-progress-btn').addEventListener('click', () => {
    if (confirm('Are you sure you want to delete all your data? This action cannot be undone.')) {
      showLoading('Deleting your data...');
      setTimeout(() => {
        localStorage.removeItem('edu_user');
        localStorage.removeItem('edu_logged');
        localStorage.removeItem('edu_settings');
        hideLoading();
        location.reload();
      }, 1500);
    }
  });

  // Legal Information Toggles
  function setupPolicyToggle(headerId, contentId) {
    const header = document.getElementById(headerId);
    const content = document.getElementById(contentId);
    header.addEventListener('click', () => {
      header.classList.toggle('open');
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.paddingTop = '0';
      } else {
        content.style.paddingTop = '16px';
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }

  setupPolicyToggle('toggle-privacy', 'privacy-content');
  setupPolicyToggle('toggle-terms', 'terms-content');

});