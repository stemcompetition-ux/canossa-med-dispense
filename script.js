<div class="app-container">

    <section id="home-screen" class="screen">
        <header class="home-header">
            <h1 class="brand-title">Canossa Med Dispenser</h1>
            <p class="brand-subtitle">Smart Healthcare Companion</p>
        </header>

        <div class="menu-grid">
            <button class="neumorphic-btn menu-btn" onclick="showScreen('scan-screen')">
                <span class="icon">📷</span>
                <span data-i18n="btn_scan">Scan Medicine</span>
            </button>
            <button class="neumorphic-btn menu-btn" onclick="showScreen('schedule-screen')">
                <span class="icon">📅</span>
                <span data-i18n="btn_schedule">Schedule</span>
            </button>
            <button class="neumorphic-btn menu-btn" onclick="showScreen('settings-screen')">
                <span class="icon">⚙️</span>
                <span data-i18n="btn_settings">Settings</span>
            </button>
        </div>
    </section>

    <section id="scan-screen" class="screen hidden">
        <header class="screen-header">
            <button class="icon-btn" onclick="showScreen('home-screen')">←</button>
            <h2 data-i18n="scan_title">AI Smart Scan</h2>
        </header>

        <div class="card scan-card">
            <label for="image-input" class="file-upload-trigger">
                <span class="upload-icon">📸</span>
                <span data-i18n="tap_photo">Capture Medicine Label</span>
            </label>
            <input type="file" id="image-input" accept="image/*" capture="environment" class="hidden">
        </div>

        <div id="loader" class="loader hidden">
            <div class="spinner"></div>
            <p data-i18n="loading">AI analyzing label context...</p>
        </div>

        <div id="result-area" class="card hidden">
            <h3 data-i18n="verify_title">Verify Information</h3>
            
            <div class="input-group">
                <label data-i18n="label_patient">Patient</label>
                <input type="text" id="edit-patient" class="neu-input">
            </div>

            <div class="input-group">
                <label data-i18n="label_med">Medicine</label>
                <input type="text" id="edit-med" class="neu-input">
            </div>

            <div class="row">
                <div class="input-group">
                    <label data-i18n="label_qty">Pills</label>
                    <input type="number" id="edit-qty" class="neu-input" value="1">
                </div>
                <div class="input-group">
                    <label data-i18n="label_freq">Times/Day</label>
                    <input type="number" id="edit-freq" class="neu-input" value="1">
                </div>
            </div>

            <div class="input-group">
                <label data-i18n="label_meal">Timing</label>
                <select id="edit-relation" class="neu-input">
                    <option value="none" data-i18n="opt_with">With Meal</option>
                    <option value="before" data-i18n="opt_before">Before Meal (30m)</option>
                    <option value="after" data-i18n="opt_after">After Meal (30m)</option>
                </select>
            </div>

            <div class="input-group alarm-toggle">
                <label>🔔 <span data-i18n="set_alarm">Set System Alarm?</span></label>
                <input type="checkbox" id="set-alarm" checked>
            </div>

            <button class="neumorphic-btn save-btn" onclick="saveToSchedule()" data-i18n="btn_save">Add to Schedule</button>
        </div>
    </section>

    <section id="schedule-screen" class="screen hidden">
        <header class="screen-header">
            <button class="icon-btn" onclick="showScreen('home-screen')">←</button>
            <h2 data-i18n="schedule_title">Calendar & Timeline</h2>
        </header>

        <div class="card calendar-card">
            <div class="calendar-header">
                <button class="icon-btn" onclick="changeMonth(-1)">❮</button>
                <h3 id="calendar-month-year">March 2026</h3>
                <button class="icon-btn" onclick="changeMonth(1)">❯</button>
            </div>
            <div id="calendar-grid" class="calendar-grid"></div>
        </div>

        <div id="day-timetable-container" class="card hidden">
            <h3 id="selected-date-title">Timetable</h3>
            <div class="timeline-wrapper" id="timeline-list">
                </div>
        </div>

        <button class="neumorphic-btn clear-btn" onclick="clearSchedule()" data-i18n="btn_clear">Clear Saved Data</button>
    </section>

    <section id="settings-screen" class="screen hidden">
        <header class="screen-header">
            <button class="icon-btn" onclick="showScreen('home-screen')">←</button>
            <h2 data-i18n="btn_settings">App Settings</h2>
        </header>

        <div class="card">
            <div class="input-group">
                <label data-i18n="label_lang">Language / 語言</label>
                <select id="lang-select" class="neu-input" onchange="changeLanguage(this.value)">
                    <option value="en">English</option>
                    <option value="zh">繁體中文</option>
                </select>
            </div>
        </div>

        <div class="card">
            <h3 data-i18n="meal_settings">Set Your Standard Meals</h3>
            <div class="input-group">
                <label data-i18n="label_bfast">Breakfast Time</label>
                <input type="time" id="user-bfast" class="neu-input" value="08:00">
            </div>
            <div class="input-group">
                <label data-i18n="label_lunch">Lunch Time</label>
                <input type="time" id="user-lunch" class="neu-input" value="13:00">
            </div>
            <div class="input-group">
                <label data-i18n="label_dinner">Dinner Time</label>
                <input type="time" id="user-dinner" class="neu-input" value="19:00">
            </div>
        </div>
    </section>

</div>