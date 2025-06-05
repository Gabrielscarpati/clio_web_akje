'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1c8b60aa97461eadabd64f5e269e3df8",
"version.json": "7ee6fad7f4a5fe6fecf3c1d2edbe3981",
"index.html": "233a5b86f520be2a8acb21f30b769dd5",
"/": "233a5b86f520be2a8acb21f30b769dd5",
"main.dart.js": "73fb918d55974d48e3134abe7f90e200",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6b82d4459d59a13b5c5709d4125dd48e",
"assets/AssetManifest.json": "20ee08cf45d8802e64dc253d6426d761",
"assets/NOTICES": "9429b6c66eedb9836801c7fdf7994972",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "8b0f84c997ae02c215d88269db7a2785",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_sound/assets/js/tau_web.js": "32cc693445f561133647b10d1b97ca07",
"assets/packages/flutter_sound/assets/js/async_processor.js": "1665e1cb34d59d2769956d2f14290274",
"assets/packages/flutter_sound_web/howler/howler.js": "3030c6101d2f8078546711db0d1a24e9",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "0ec45f8c46d7ddb18691714c0c7348c8",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "b14f8d190230d77c02ffc51ce962ce80",
"assets/packages/flutter_sound_web/src/flutter_sound_stream_processor.js": "48d52b8f36a769ea0e90cf9e58eddfa7",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "3c26fcc60917c4cbaa6a30a231f7d4d8",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/mixpanel_flutter/assets/mixpanel.js": "48a5241deca6bca875259d2b562d7081",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "39580564362d1d6f57c256bca8249faa",
"assets/fonts/MaterialIcons-Regular.otf": "8ae54b3ac918102265e9bac2c64bd0e0",
"assets/assets/images/journal/hawthorne-sophia.jpg": "0377913548405b2d1b574f5524f4dd0e",
"assets/assets/images/journal/ai_image_journaling.jpeg": "245281b98ca8c5b770179248a223b70d",
"assets/assets/images/meditation/surrender-practice.jpeg": "2ac4f4b5bf2c796947f2d6d88123ac7c",
"assets/assets/images/meditation/floating-awareness.jpeg": "f9024c96efb642563fafc1cd22a06e2d",
"assets/assets/images/meditation/grounding-meditation.jpeg": "fcf890f54fb74d863de674eabcca9b06",
"assets/assets/images/meditation/video_player_button.png": "630cdddcd78d7a69e1681f86418a19b1",
"assets/assets/images/meditation/grief-processing-visualization.jpeg": "1ec3af204d6dfd3b60af6bc5f677ba70",
"assets/assets/images/meditation/mirror-meditation.jpeg": "fe6aceeb3c3a30075c48733ed0d6e1f6",
"assets/assets/images/meditation/emotional-release.jpeg": "f7d85458ff71c3f78b21753c0dbe836c",
"assets/assets/images/meditation/mindfulness-meditation.jpeg": "6398c71799a4f3376d157d47164d44e7",
"assets/assets/images/meditation/zen-meditation.jpeg": "6672e8044ebeadf7d44c323bddff5305",
"assets/assets/images/meditation/flow-state.jpeg": "d0ee52c23574ce636d8ee372fe66369f",
"assets/assets/images/meditation/open-awareness.jpeg": "e741380853c07a2ac3c0751112f60c31",
"assets/assets/images/meditation/self-compassion.jpeg": "278eedfebdf8f5caef22cbc7210ae710",
"assets/assets/images/meditation/body-scan.jpeg": "e99bf14f5d95aa2c7ae3bbab1b68b166",
"assets/assets/images/meditation/river-of-thoughts.jpeg": "07d5b7f57a4c4abf2712604d669e3eec",
"assets/assets/images/meditation/impermanence.jpeg": "deed276b29d3e590444b283e8e04f393",
"assets/assets/images/meditation/loving-kindness-for-others.jpeg": "fe97ce336569ccc79e561a42b1ab6935",
"assets/assets/images/meditation/guided-imagery.jpeg": "a317e1fe23f6489771494848c63aa604",
"assets/assets/images/meditation/breath-counting.jpeg": "b5363df4def943a4ee44e03193be49bf",
"assets/assets/images/meditation/gratitude-for-relationships.jpeg": "00f745abc66582cd62282cb47f2ed1cb",
"assets/assets/images/meditation/shared-humanity.jpeg": "83a2769deaf8a0f47e5991f451fded45",
"assets/assets/images/meditation/fire-to-calm-visualization.jpeg": "2adefb1d9635f3b0cb576484ac7a4ece",
"assets/assets/images/meditation/loving-kindness-metta.jpeg": "e1c08845df4b56d819ad4e76dfa4eec6",
"assets/assets/images/meditation/creative-visualization.jpeg": "fafecef1f908a7497393a05662570d25",
"assets/assets/images/meditation/clio_timed_meditation.png": "14bd7ddc1588d7d968dfb3c9ccb69c87",
"assets/assets/images/meditation/heart-centered-meditation.jpeg": "b3816c0381b732be43ac10f6550baca4",
"assets/assets/images/meditation/deep-rest-meditation.jpeg": "2689909120ad31fbf75cdb54993abc83",
"assets/assets/images/meditation/inner-smile-practice.jpeg": "8ecf157156c0690c5bf06ba3447b9365",
"assets/assets/images/meditation/compassion-for-others.jpeg": "4908105362fbdcd1c7871b68c94be39d",
"assets/assets/images/meditation/time-block-productivity.jpeg": "f50f2779a494da1540dcf924754b34a2",
"assets/assets/images/splash/logo.png": "1affee4924e89f9acd85c6ffdd846520",
"assets/assets/images/chat/classical_clinician.png": "8aa3f9c6b2f09d696525184c17803f19",
"assets/assets/images/chat/mom.png": "8d4fa4bb507e6a296356279360a75668",
"assets/assets/images/chat/friend.png": "b370811572c882052d390a26ab2e4151",
"assets/assets/images/chat/dad.png": "7a9598b6c9501dad0e6a0ee77b44a1e9",
"assets/assets/images/welcome/welcome_screen_top.png": "7e4a4a37d03b8dd0f196c020799babbf",
"assets/assets/images/activities/fantastical.png": "015116959a4797723f26ad66693fc68e",
"assets/assets/images/activities/clio_header_image.png": "5ef17a6621ca410b5a88f2d6e2171131",
"assets/assets/images/activities/animals.png": "b48e1ede53e742af9cb49d083bee19f1",
"assets/assets/images/activities/emotion_painter/nature_scenery/desert_sunshine.jpeg": "498b071f370509e9099043500ae5c263",
"assets/assets/images/activities/emotion_painter/nature_scenery/mountain_day.jpeg": "24908764e3ef75e6d46c978b7d3f027e",
"assets/assets/images/activities/emotion_painter/nature_scenery/forest_path.jpeg": "8c3afeacc9db79901fc780df6e5177b9",
"assets/assets/images/activities/emotion_painter/nature_scenery/sunset_meadow.jpeg": "37aa1f2ae5ce96e4c375c85db15452dd",
"assets/assets/images/activities/emotion_painter/nature_scenery/rainy_day_fun.jpeg": "99daca07a9bd4d17c697d0d9bf46c201",
"assets/assets/images/activities/emotion_painter/fantastical_story_based/fairy_garden_party.jpeg": "4379ddac01758a088a37487665346dd2",
"assets/assets/images/activities/emotion_painter/fantastical_story_based/gnome_village.jpeg": "7e0ed80cf8f2d25cfd6ad8fae2b43bcc",
"assets/assets/images/activities/emotion_painter/fantastical_story_based/wizard_tower_day.jpeg": "f4e1176845797f3bfc486826325beaf6",
"assets/assets/images/activities/emotion_painter/fantastical_story_based/mermaid_lagoon.jpeg": "352a95917a689c3c70293544eec40c7d",
"assets/assets/images/activities/emotion_painter/fantastical_story_based/dragon_nap.jpeg": "663dddba884f13b77c230da7bddef8f7",
"assets/assets/images/activities/emotion_painter/mandalas/big_mandala_1.jpeg": "fe9c1a1153a7162e405951d8dcaec9e0",
"assets/assets/images/activities/emotion_painter/mandalas/big_mandala_3.jpeg": "dcdc1c0940e6886a1ff242cac6cbb2aa",
"assets/assets/images/activities/emotion_painter/mandalas/big_mandala_2.jpeg": "1ad3007ef8a0eb7f3cfea7f92327a8a7",
"assets/assets/images/activities/emotion_painter/mandalas/big_mandala_5.jpeg": "59a4aa1efc932f8a269098a3e9de318d",
"assets/assets/images/activities/emotion_painter/mandalas/big_mandala_4.jpeg": "d73687df3511911eefa80a7f70dc0435",
"assets/assets/images/activities/emotion_painter/quotes_with_frames/big_you_got_this.jpeg": "dc773513032d54b98201bd41f99ddd85",
"assets/assets/images/activities/emotion_painter/quotes_with_frames/big_brave_heart.jpeg": "51fcaa8346c7cc673e5fe2d36e42629b",
"assets/assets/images/activities/emotion_painter/quotes_with_frames/big_shine_bright.jpeg": "0c44064bac13409a1178fd98c7b824f9",
"assets/assets/images/activities/emotion_painter/quotes_with_frames/big_be_kind.jpeg": "44392fa183a4ce2f6b335063b4c83b67",
"assets/assets/images/activities/emotion_painter/quotes_with_frames/big_dream_big.jpeg": "35a6b890bba353964327752ed81311e5",
"assets/assets/images/activities/emotion_painter/animals_creatures/garden_life.jpeg": "7bb5cc63d472bda7cdad1e8eca378e03",
"assets/assets/images/activities/emotion_painter/animals_creatures/safari_day.jpeg": "796ae2a763daf9b338b765cbb71fc7ff",
"assets/assets/images/activities/emotion_painter/animals_creatures/ocean_friends.jpeg": "8e31e4b34c55112b02e21f7a26cd612d",
"assets/assets/images/activities/emotion_painter/animals_creatures/magical_sky.jpeg": "c6b62456bc17bad5d430a50211daa1c0",
"assets/assets/images/activities/emotion_painter/animals_creatures/jungle_friends.jpeg": "726de51e01f1ffe06184ecfc12cc4c86",
"assets/assets/images/activities/emotion_painter/animals_creatures/dragon_nest.jpeg": "78ef150e4474cf1c723487d291699b52",
"assets/assets/images/activities/emotion_painter/animals_creatures/farmyard_friends.jpeg": "c40340ccc0412deafdd009bb65519cb7",
"assets/assets/images/activities/emotion_painter/architecture_places/beach_hut_day.jpeg": "c62e30632daaabac33321ec774e90e34",
"assets/assets/images/activities/emotion_painter/architecture_places/sunny_castle.jpeg": "f5831a929c62a607aa1be9f60cc00528",
"assets/assets/images/activities/emotion_painter/architecture_places/city_block_buddies.jpeg": "9705782ae0aa1778908ac4ada034b362",
"assets/assets/images/activities/emotion_painter/architecture_places/treehouse_hangout.jpeg": "4142e35837572c8acae2d591fc2daad3",
"assets/assets/images/activities/emotion_painter/architecture_places/cozy_cabin.jpeg": "026cbe764d60f1f72e546c5b27af392b",
"assets/assets/images/activities/emotion_painter.png": "1b4172d32ba3ba3d6128edfb087517cb",
"assets/assets/images/activities/quotes.png": "790e224c1d662b4e58fec1b94bdd5b49",
"assets/assets/images/activities/image_done_activity.png": "c4aaec58fdb4b19eb9c12bf2860ecb0f",
"assets/assets/images/activities/nature.png": "29c3089ad57d6baff0464faba5b12b0c",
"assets/assets/images/activities/mandalas.png": "3537dda32f32dbdf84329a26ef48fa6c",
"assets/assets/images/activities/adventure_jar.png": "e6c3d4588fe1f13b374df7d93d316350",
"assets/assets/images/activities/superhero_clio.png": "1c4c773e2b51bd4716ce140f8671f1e0",
"assets/assets/images/activities/movement_quest.png": "7de6daa917eb4326287f232e243a39e7",
"assets/assets/images/activities/letter_lab.png": "34846ba6abb8625d27740994deb2ca11",
"assets/assets/images/activities/cognitive_combat.png": "91fd64b43d97211a692b10501c9f1719",
"assets/assets/images/activities/pause_clio_image.png": "2fac146c2077593831a81dd79aae4ffd",
"assets/assets/images/activities/social_scheduler.png": "6e76ab2f7f0bd457df584df4119526e3",
"assets/assets/images/activities/architecture.png": "d6fae0f26202e54d416bf2853bcc442f",
"assets/assets/images/onboarding/mental_physical_screen_top.png": "7523a39e1dd0731b14eb594dd1e8966e",
"assets/assets/images/onboarding/what_country_you_in.png": "938ff91b9ff7b6b69e66c9ac64677416",
"assets/assets/images/onboarding/what_should_your_ai_call_you.png": "fe54898a85c2da4215acb3dca00477c0",
"assets/assets/images/onboarding/have_you_ever_been_therapy.png": "fddb94d04eec6ff2330b157c60014964",
"assets/assets/images/onboarding/you_expectations_clio.png": "867f7703d9e3bb07a52e27395902febf",
"assets/assets/images/onboarding/how_many_days_do_you_struggle_with_mental_health.png": "818a21e3baf1352b81332687918440b6",
"assets/assets/images/onboarding/describe_your_current_mental_health.png": "e4abe3d3734adbd87ce03deb874d81be",
"assets/assets/images/onboarding/what_your_ethinicity.png": "00731c5de35fc4a9a2884dad39aa85fc",
"assets/assets/images/onboarding/your_nick_name.png": "0637607ae7a61850f82e45525a6072f2",
"assets/assets/images/onboarding/which_state_region.png": "4fca262ffa0069b0c2b41b63225c1109",
"assets/assets/images/onboarding/what_led_you_to_consider_therapy_today.png": "97f070dac45d6770cedabe34477eeb38",
"assets/assets/images/onboarding/welcome_screen_top.png": "d8eac3ddd730c390de7a77ba65c799b7",
"assets/assets/images/onboarding/which_state_you_leave_in.png": "22d7df096e788899bf85a26600f88f59",
"assets/assets/images/onboarding/whats_your_race.png": "e0c6edcb1340f778eb1ae050b181634b",
"assets/assets/images/onboarding/when_birth_day.png": "247becf135febedfe454b4a2eba23882",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
