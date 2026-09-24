// ======================================================
// 新発田観光マップ
// ======================================================


// ======================================================
// ランドマーク一覧
// ======================================================

const spots = [

    {
        name: "新発田城跡",
        lat: 37.954824724542696,
        lng: 139.326001834219947,
        radius: 50,
        image: "image/城.png",

        category: "history",
        categoryName: "歴史・文化",
        icon: "🏯"
    },

    {
        name: "清水園",
        lat: 37.943791,
        lng: 139.328785,
        radius: 50,
        image: "image/清水園.jpg",

        category: "history",
        categoryName: "歴史・庭園",
        icon: "🌳"
    },

    {
        name: "蔵春閣",
        lat: 37.94389807273562,
        lng: 139.3317142467578,
        radius: 20,
        image: "image/蔵春閣.png",

        category: "history",
        categoryName: "歴史・文化",
        icon: "🏯"
    },

    {
        name: "東公園のSL",
        lat: 37.94371455113034,
        lng: 139.33219327519282,
        radius: 20,
        image: "image/SL.jpg",

        category: "history",
        categoryName: "歴史・文化",
        icon: "🚂"
    },

    {
        name: "諏訪神社",
        lat: 37.944214,
        lng: 139.332004,
        radius: 20,
        image: "image/諏訪神社.jpg",

        category: "history",
        categoryName: "歴史・神社",
        icon: "⛩️"
    },

    {
        name: "新発田市役所",
        lat: 37.947839,
        lng: 139.327160,
        radius: 30,
        image: "image/役所.jpg",

        category: "facility",
        categoryName: "公共施設",
        icon: "🏢"
    },

    {
        name: "王紋酒造",
        lat: 37.94436989072327,
        lng: 139.33066511399528,
        radius: 30,
        image: "image/王紋.jpg",

        category: "food",
        categoryName: "グルメ・酒蔵",
        icon: "🍶"
    },

    {
        name: "五十公野公園",
        lat: 37.939869,
        lng: 139.356680,
        radius: 80,
        image: "image/五十公野公園.png",

        category: "nature",
        categoryName: "自然・公園",
        icon: "🌳"
    },

    {
        name: "カルチャーセンター",
        lat: 37.950246,
        lng: 139.338618,
        radius: 45,
        image: "image/カルチャー.jpg",

        category: "facility",
        categoryName: "公共施設",
        icon: "🏢"
    },

    {
        name: "新発田駅",
        lat: 37.94413,
        lng: 139.33510,
        radius: 35,
        image: "image/駅.png",

        category: "station",
        categoryName: "交通",
        icon: "🚉"
    },

    {
        name: "あやめの湯",
        lat: 37.953545,
        lng: 139.3549475,
        radius: 50,
        image: "image/あやめの湯.jpg",

        category: "nature",
        categoryName: "温泉・観光",
        icon: "♨️"
    },

    {
        name: "イクネスしばた",
        lat: 37.944357,
        lng: 139.333388,
        radius: 30,
        image: "image/イクネス.jpg",

        category: "facility",
        categoryName: "公共施設",
        icon: "📚"
    },

    {
        name: "市民文化会館",
        lat: 37.951722,
        lng: 139.326564,
        radius: 30,
        image: "image/文化会館.jpg",

        category: "facility",
        categoryName: "文化施設",
        icon: "🎭"
    },

    {
        name: "新発田歴史図書館",
        lat: 37.951279909157336,
        lng: 139.32774756292181,
        radius: 30,
        image: "image/歴史図書館.jpg",

        category: "history",
        categoryName: "歴史・文化",
        icon: "📖"
    },

    {
        name: "旧新発田市役所",
        lat: 37.950883,
        lng: 139.327898,
        radius: 30,
        image: "image/旧役所.png",

        category: "history",
        categoryName: "歴史・文化",
        icon: "🏛️"
    },

    {
        name: "新潟職能短大",
        lat: 37.956067,
        lng: 139.337938,
        radius: 150,
        image: "image/短大.png",

        category: "facility",
        categoryName: "学校・施設",
        icon: "🎓"
    },

    {
        name: "菊水",
        lat: 37.960376479226,
        lng: 139.35429135822383,
        radius: 30,
        image: "image/菊水.jpg",

        category: "food",
        categoryName: "グルメ・酒蔵",
        icon: "🍶"
    },

    {
        name: "ボン・タケダ",
        lat: 37.94039,
        lng: 139.33600,
        radius: 50,
        image: "image/タケダ.jpg",

        category: "food",
        categoryName: "グルメ",
        icon: "🥐"
    }

];


// ======================================================
// 激レアランドマーク
// ======================================================

const spots2 = [

    {
        name: "テスト",

        lat: 37.95693480157634,
        lng: 139.3360638811011,

        radius: 50,
        unlockPoint: 0,

        image: "image/城.png"
    },

    {
        name: "藤倉メンチカツや",

        lat: 37.93682,
        lng: 139.34488,

        radius: 50,
        unlockPoint: 480,

        image: "image/メンチカツ.jpg"
    },

    {
        name: "いっぷく",

        lat: 37.94437654050752,
        lng: 139.3407439626735,

        radius: 50,
        unlockPoint: 960,

        image: "image/いっぷく.jpg"
    },

    {
        name: "文化洋食ino",

        lat: 37.96236411397717,
        lng: 139.33428189358867,

        radius: 50,
        unlockPoint: 1440,

        image: "image/ino.png"
    },

    {
        name: "やすけカレー",

        lat: 37.93774827263629,
        lng: 139.33615892651278,

        radius: 50,
        unlockPoint: 1920,

        image: "image/やすけ.jpg"
    },

    {
        name: "お食事処 蒲城",

        lat: 37.95049684,
        lng: 139.3394747,

        radius: 50,
        unlockPoint: 2400,

        image: "image/蒲城.jpg"
    },

    {
        name: "コーヒーマリーナ 煉瓦屋",

        lat: 37.94901564395905,
        lng: 139.3243217255289,

        radius: 50,
        unlockPoint: 3360,

        image: "image/煉瓦屋.png"
    },

    {
        name: "パーラーやお屋",

        lat: 37.9584998,
        lng: 139.3425282,

        radius: 50,
        unlockPoint: 3360,

        image: "image/やおや.png"
    }

];


// ======================================================
// localStorage
// ======================================================

let answeredSpots =
    JSON.parse(
        localStorage.getItem("answeredSpots")
    ) || [];


let arrivalSpots =
    JSON.parse(
        localStorage.getItem("arrivalSpots")
    ) || [];


// ======================================================
// 現在地
// ======================================================

let currentPosition = null;

let userMarker = null;

let currentCategory = "all";


// ======================================================
// 地図初期化
// ======================================================

const map = L.map("map").setView(
    [37.9555, 139.3400],
    15
);


// ======================================================
// OpenStreetMap
// ======================================================

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution:
            "&copy; OpenStreetMap contributors"
    }
).addTo(map);


// ======================================================
// 現在地アイコン
// ======================================================

const userIcon = L.divIcon({

    className: "user-location-icon",

    html: `
        <div class="user-location-dot">
            📍
        </div>
    `,

    iconSize: [45, 45],

    iconAnchor: [22, 45]

});


// ======================================================
// ジャンル別アイコン
// ======================================================

function createCategoryIcon(
    icon,
    category,
    answered = false
) {

    const answeredClass =
        answered
            ? " answered"
            : "";

    return L.divIcon({

        className:
            "custom-marker",

        html: `
            <div
                class="marker-pin ${category}${answeredClass}"
            >

                <span>
                    ${answered ? "✓" : icon}
                </span>

            </div>
        `,

        iconSize: [46, 56],

        iconAnchor: [23, 56],

        popupAnchor: [0, -50]

    });

}


// ======================================================
// 激レアアイコン
// ======================================================

function createRareIcon(answered = false) {

    return L.divIcon({

        className:
            "custom-marker",

        html: `
            <div
                class="marker-pin rare
                ${answered ? "answered" : ""}"
            >
                <span>
                    ${answered ? "✓" : "⭐"}
                </span>
            </div>
        `,

        iconSize: [46, 56],

        iconAnchor: [23, 56],

        popupAnchor: [0, -50]

    });

}


// ======================================================
// 通常スポットを表示
// ======================================================

spots.forEach(spot => {

    createSpotMarker(spot);

});


// ======================================================
// 通常スポット作成
// ======================================================

function createSpotMarker(spot) {

    const answered =
        answeredSpots.includes(
            spot.name
        );

    const marker =
        L.marker(
            [
                spot.lat,
                spot.lng
            ],
            {
                icon:
                    createCategoryIcon(
                        spot.icon,
                        spot.category,
                        answered
                    )
            }
        ).addTo(map);


    // マーカー保存
    spot.marker = marker;


    // 到達範囲
    const circle =
        L.circle(
            [
                spot.lat,
                spot.lng
            ],
            {
                radius: spot.radius,

                color:
                    getCategoryColor(
                        spot.category
                    ),

                fillColor:
                    getCategoryColor(
                        spot.category
                    ),

                fillOpacity: 0.08,

                weight: 1
            }
        ).addTo(map);


    spot.circle = circle;


    // ポップアップ
    marker.bindPopup(
        createPopupContent(
            spot,
            false
        )
    );


    // マーカークリック
    marker.on(
        "click",
        function () {

            marker.setPopupContent(
                createPopupContent(
                    spot,
                    false
                )
            );

        }
    );

}


// ======================================================
// ジャンルカラー
// ======================================================

function getCategoryColor(category) {

    switch (category) {

        case "history":
            return "#8e44ad";

        case "nature":
            return "#27ae60";

        case "food":
            return "#e67e22";

        case "facility":
            return "#3498db";

        case "station":
            return "#16a085";

        default:
            return "#777";

    }

}


// ======================================================
// ポップアップ
// ======================================================

function createPopupContent(
    spot,
    rare = false
) {

    const answered =
        answeredSpots.includes(
            spot.name
        );


    let distanceText = "";

    if (currentPosition) {

        const distance =
            getDistance(
                currentPosition.lat,
                currentPosition.lng,
                spot.lat,
                spot.lng
            );

        distanceText =
            `<p class="popup-distance">
                📍 現在地から約
                ${formatDistance(distance)}
            </p>`;
    }


    let quizButton = "";

    if (answered) {

        quizButton = `
            <div class="answered-label">
                ✓ クイズ回答済み
            </div>
        `;

    } else {

        quizButton = `
            <a
                class="popup-button quiz-button"
                href="quiz.html?spot=${encodeURIComponent(
                    spot.name
                )}"
            >
                🧠 クイズに挑戦
            </a>
        `;

    }


    return `

        <div class="popup-card">

            <div class="popup-title">

                <span class="popup-icon">
                    ${rare ? "⭐" : spot.icon}
                </span>

                <h3>
                    ${spot.name}
                </h3>

            </div>


            ${
                spot.image
                ?
                `
                <img
                    class="popup-image"
                    src="${spot.image}"
                    alt="${spot.name}"
                >
                `
                :
                ""
            }


            <div
                class="popup-category
                ${rare ? "rare-category" : spot.category}"
            >
                ${
                    rare
                    ? "⭐ 激レアスポット"
                    : spot.categoryName
                }
            </div>


            ${
                distanceText
            }


            ${
                quizButton
            }


            <button
                class="popup-button route-button"
                onclick="startNavigationToSpot(
                    ${spot.lat},
                    ${spot.lng},
                    '${escapeForJS(spot.name)}'
                )"
            >
                🚶 ここまで案内
            </button>

        </div>

    `;

}


// ======================================================
// HTML / JS用文字列エスケープ
// ======================================================

function escapeForJS(text) {

    return text
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'");

}


// ======================================================
// 激レアスポット更新
// ======================================================

function updateRareSpots() {

    const totalScore =
        Number(
            localStorage.getItem(
                "totalScore"
            )
        ) || 0;


    spots2.forEach(
        spot => {

            // 未解放
            if (
                totalScore <
                spot.unlockPoint
            ) {

                return;

            }


            // すでに作成済み
            if (spot.marker) {

                return;

            }


            const answered =
                answeredSpots.includes(
                    spot.name
                );


            const marker =
                L.marker(
                    [
                        spot.lat,
                        spot.lng
                    ],
                    {
                        icon:
                            createRareIcon(
                                answered
                            )
                    }
                ).addTo(map);


            spot.marker =
                marker;


            const circle =
                L.circle(
                    [
                        spot.lat,
                        spot.lng
                    ],
                    {
                        radius:
                            spot.radius,

                        color:
                            "#f1c40f",

                        fillColor:
                            "#f1c40f",

                        fillOpacity:
                            0.10,

                        weight: 2
                    }
                ).addTo(map);


            spot.circle =
                circle;


            marker.bindPopup(
                createPopupContent(
                    spot,
                    true
                )
            );

        }
    );

}


// 初回実行
updateRareSpots();


// ======================================================
// 距離計算
// ======================================================

function getDistance(
    lat1,
    lng1,
    lat2,
    lng2
) {

    const R =
        6371000;

    const toRad =
        x =>
            x *
            Math.PI /
            180;


    const dLat =
        toRad(
            lat2 - lat1
        );

    const dLng =
        toRad(
            lng2 - lng1
        );


    const a =
        Math.sin(
            dLat / 2
        ) ** 2 +

        Math.cos(
            toRad(lat1)
        ) *

        Math.cos(
            toRad(lat2)
        ) *

        Math.sin(
            dLng / 2
        ) ** 2;


    return (
        2 *
        R *
        Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        )
    );

}


// ======================================================
// 距離表示
// ======================================================

function formatDistance(
    distance
) {

    if (distance < 1000) {

        return (
            Math.round(distance) +
            "m"
        );

    }


    return (
        (distance / 1000)
            .toFixed(1) +
        "km"
    );

}


// ======================================================
// 現在地取得
// ======================================================

navigator.geolocation.watchPosition(

    position => {

        const userLat =
            position.coords.latitude;

        const userLng =
            position.coords.longitude;


        currentPosition = {

            lat: userLat,

            lng: userLng

        };


        // 現在地マーカー
        updateUserMarker(
            userLat,
            userLng
        );


        // 到達判定
        checkArrival(
            userLat,
            userLng
        );


        // 近くのスポット
        updateNearbySpots(
            userLat,
            userLng
        );


        // ポップアップ更新
        refreshPopupContents();

    },

    error => {

        console.error(
            "位置情報エラー:",
            error
        );


        document.getElementById(
            "result"
        ).innerHTML = `
            📍 現在地を取得できません。<br>
            位置情報の利用を許可してください。
        `;

    },

    {

        enableHighAccuracy: true,

        maximumAge: 5000,

        timeout: 10000

    }

);


// ======================================================
// 現在地マーカー更新
// ======================================================

function updateUserMarker(
    lat,
    lng
) {

    if (!userMarker) {

        userMarker =
            L.marker(
                [lat, lng],
                {
                    icon:
                        userIcon,

                    zIndexOffset:
                        1000
                }
            ).addTo(map);


        userMarker.bindPopup(
            "📍 現在地"
        );

    } else {

        userMarker.setLatLng(
            [lat, lng]
        );

    }

}


// ======================================================
// 現在地へ移動
// ======================================================

function moveToCurrentLocation() {

    if (!currentPosition) {

        alert(
            "現在地を取得中です。"
        );

        return;

    }


    map.setView(

        [
            currentPosition.lat,
            currentPosition.lng
        ],

        17,

        {
            animate: true
        }

    );


    if (userMarker) {

        userMarker.openPopup();

    }

}


// ======================================================
// 到達判定
// ======================================================

function checkArrival(
    userLat,
    userLng
) {

    let found =
        false;


    // 通常スポット
    spots.forEach(
        spot => {

            const distance =
                getDistance(
                    userLat,
                    userLng,
                    spot.lat,
                    spot.lng
                );


            if (
                !answeredSpots.includes(
                    spot.name
                ) &&
                distance <=
                spot.radius
            ) {

                found =
                    true;


                document.getElementById(
                    "result"
                ).innerHTML = `

                    <div class="arrival-box">

                        <strong>
                            🎉 ${spot.name}に到達！
                        </strong>

                        <a
                            href="quiz.html?spot=${encodeURIComponent(
                                spot.name
                            )}"
                            class="arrival-button"
                        >
                            🧠 クイズに挑戦
                        </a>

                    </div>

                `;

            }

        }
    );


    // 激レア
    spots2.forEach(
        spot => {

            const totalScore =
                Number(
                    localStorage.getItem(
                        "totalScore"
                    )
                ) || 0;


            if (
                totalScore <
                spot.unlockPoint
            ) {

                return;

            }


            const distance =
                getDistance(
                    userLat,
                    userLng,
                    spot.lat,
                    spot.lng
                );


            if (
                !answeredSpots.includes(
                    spot.name
                ) &&
                distance <=
                spot.radius
            ) {

                found =
                    true;


                document.getElementById(
                    "result"
                ).innerHTML = `

                    <div
                        class="arrival-box rare-arrival"
                    >

                        <strong>
                            ⭐ ${spot.name}
                            に到達！
                        </strong>

                        <a
                            href="quiz.html?spot=${encodeURIComponent(
                                spot.name
                            )}"
                            class="arrival-button"
                        >
                            🧠 クイズに挑戦
                        </a>

                    </div>

                `;

            }

        }
    );


    if (!found) {

        document.getElementById(
            "result"
        ).innerHTML = `
            📍 スポットを探してみよう！
        `;

    }

}


// ======================================================
// 近くのスポット一覧
// ======================================================

function updateNearbySpots(
    userLat,
    userLng
) {

    const nearbyList =
        document.getElementById(
            "nearbyList"
        );


    let allSpots = [];


    // 通常スポット
    spots.forEach(
        spot => {

            const distance =
                getDistance(
                    userLat,
                    userLng,
                    spot.lat,
                    spot.lng
                );


            allSpots.push({

                ...spot,

                distance,

                rare: false

            });

        }
    );


    // 解放済み激レア
    const totalScore =
        Number(
            localStorage.getItem(
                "totalScore"
            )
        ) || 0;


    spots2.forEach(
        spot => {

            if (
                totalScore >=
                spot.unlockPoint
            ) {

                const distance =
                    getDistance(
                        userLat,
                        userLng,
                        spot.lat,
                        spot.lng
                    );


                allSpots.push({

                    ...spot,

                    distance,

                    rare: true

                });

            }

        }
    );


    // 距離順
    allSpots.sort(
        (a, b) =>
            a.distance -
            b.distance
    );


    // 上位5件
    const nearest =
        allSpots.slice(
            0,
            5
        );


    nearbyList.innerHTML =
        "";


    nearest.forEach(
        spot => {

            const answered =
                answeredSpots.includes(
                    spot.name
                );


            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "nearby-item";


            if (answered) {

                item.classList.add(
                    "completed"
                );

            }


            item.innerHTML = `

                <div class="nearby-icon">

                    ${
                        answered
                        ? "✓"
                        : (
                            spot.rare
                            ? "⭐"
                            : spot.icon
                        )
                    }

                </div>


                <div class="nearby-info">

                    <strong>
                        ${spot.name}
                    </strong>

                    <small>
                        ${
                            spot.rare
                            ? "⭐ 激レア"
                            : (
                                spot.categoryName
                                || "観光スポット"
                            )
                        }
                    </small>

                </div>


                <div class="nearby-distance">

                    ${
                        formatDistance(
                            spot.distance
                        )
                    }

                </div>

            `;


            item.onclick =
                function () {

                    map.setView(

                        [
                            spot.lat,
                            spot.lng
                        ],

                        17,

                        {
                            animate:
                                true
                        }

                    );


                    if (
                        spot.marker
                    ) {

                        spot.marker.openPopup();

                    }

                };


            nearbyList.appendChild(
                item
            );

        }
    );

}


// ======================================================
// ジャンルフィルター
// ======================================================

function filterCategory(
    category
) {

    currentCategory =
        category;


    // ボタンの状態
    document
        .querySelectorAll(
            ".category-btn"
        )
        .forEach(
            button => {

                button.classList.remove(
                    "active"
                );

            }
        );


    const activeButton =
        document.querySelector(
            `[data-category="${category}"]`
        );


    if (activeButton) {

        activeButton.classList.add(
            "active"
        );

    }


    // 通常スポット
    spots.forEach(
        spot => {

            if (
                !spot.marker
            ) {

                return;

            }


            const visible =
                category === "all" ||
                spot.category === category;


            if (visible) {

                map.addLayer(
                    spot.marker
                );

                map.addLayer(
                    spot.circle
                );

            } else {

                map.removeLayer(
                    spot.marker
                );

                map.removeLayer(
                    spot.circle
                );

            }

        }
    );


    // 激レア
    spots2.forEach(
        spot => {

            if (
                !spot.marker
            ) {

                return;

            }


            const visible =
                category === "all" ||
                category === "rare";


            if (visible) {

                map.addLayer(
                    spot.marker
                );

                map.addLayer(
                    spot.circle
                );

            } else {

                map.removeLayer(
                    spot.marker
                );

                map.removeLayer(
                    spot.circle
                );

            }

        }
    );

}


// ======================================================
// ポップアップ内容更新
// ======================================================

function refreshPopupContents() {

    spots.forEach(
        spot => {

            if (
                spot.marker
            ) {

                spot.marker.setPopupContent(
                    createPopupContent(
                        spot,
                        false
                    )
                );

            }

        }
    );


    spots2.forEach(
        spot => {

            if (
                spot.marker
            ) {

                spot.marker.setPopupContent(
                    createPopupContent(
                        spot,
                        true
                    )
                );

            }

        }
    );

}


// ======================================================
// 「ここまで案内」
// ======================================================

function startNavigationToSpot(
    lat,
    lng,
    name
) {

    if (!currentPosition) {

        alert(
            "現在地を取得できません。"
        );

        return;

    }


    const url =
        "https://www.google.com/maps/dir/?api=1" +
        "&origin=" +
        currentPosition.lat +
        "," +
        currentPosition.lng +
        "&destination=" +
        lat +
        "," +
        lng +
        "&travelmode=walking";


    window.open(
        url,
        "_blank"
    );

}


// ======================================================
// 合計得点表示
// ======================================================

function updateTotalScore() {

    const totalScore =
        Number(
            localStorage.getItem(
                "totalScore"
            )
        ) || 0;


    const scoreElement =
        document.getElementById(
            "totalScore"
        );


    if (scoreElement) {

        scoreElement.textContent =
            `🏆 ${totalScore} pt`;

    }


    updateRareSpots();

}


// ======================================================
// リセット
// ======================================================

function resetGame() {

    const result =
        confirm(
            "得点・回答履歴・到達履歴をすべてリセットしますか？"
        );


    if (!result) {

        return;

    }


    localStorage.setItem(
        "totalScore",
        "0"
    );


    localStorage.setItem(
        "answeredSpots",
        JSON.stringify([])
    );


    localStorage.setItem(
        "arrivalSpots",
        JSON.stringify([])
    );


    alert(
        "リセットしました。"
    );


    location.reload();

}


// ======================================================
// 初期処理
// ======================================================

updateTotalScore();

