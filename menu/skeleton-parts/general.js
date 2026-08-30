/*--------------------------------------------------------------
>>> GENERAL
--------------------------------------------------------------*/

extension.skeleton.main.layers.section.general = {
	component: 'button',
	variant: 'general',
	category: true,
	on: {
		click: {
			section_1: {
				component: 'section',
				variant: 'card',
				improvedtube_youtube_icon: {
					text: 'improvedtubeIconOnYoutube',
					component: 'select',
					options: [{
						text: 'disabled',
						value: 'disabled'
					}, {
						text: 'draggable',
						value: 'draggable'
					}, {
						text: 'youtubeHeaderLeft',
						value: 'header_left'
					}, {
						text: 'youtubeHeaderRight',
						value: 'header_right'
					}, {
						text: 'sidebar',
						value: 'sidebar'
					}, {
						text: 'belowPlayer',
						value: 'below_player'
					}]
				},
				/*			improvedTubeSidePanel: {
					component: 'switch',
					text: 'improvedTubeSidePanel'
					},
		*/		default_content_country: {
					component: 'select',
					text: 'defaultContentCountry',
					options: [{ text: "default", value: "default" }, { text: "region:AF", value: "AF" }, { text: "region:AL", value: "AL" }, { text: "region:DZ", value: "DZ" }, { text: "region:AS", value: "AS" }, { text: "region:AD", value: "AD" }, { text: "region:AO", value: "AO" }, { text: "region:AI", value: "AI" }, { text: "region:AQ", value: "AQ" }, { text: "region:AG", value: "AG" }, { text: "region:AR", value: "AR" }, { text: "region:AM", value: "AM" }, { text: "region:AW", value: "AW" }, { text: "region:AU", value: "AU" }, { text: "region:AT", value: "AT" }, { text: "region:AZ", value: "AZ" }, { text: "region:BH", value: "BH" }, { text: "region:GG", value: "GG" }, { text: "region:BD", value: "BD" }, { text: "region:BB", value: "BB" }, { text: "region:BY", value: "BY" }, { text: "region:BE", value: "BE" }, { text: "region:BZ", value: "BZ" }, { text: "region:BJ", value: "BJ" }, { text: "region:BM", value: "BM" }, { text: "region:BT", value: "BT" }, { text: "region:BO", value: "BO" }, { text: "region:BQ", value: "BQ" }, { text: "region:BA", value: "BA" }, { text: "region:BW", value: "BW" }, { text: "region:BV", value: "BV" }, { text: "region:BR", value: "BR" }, { text: "region:IO", value: "IO" }, { text: "region:VG", value: "VG" }, { text: "region:BN", value: "BN" }, { text: "region:BG", value: "BG" }, { text: "region:BF", value: "BF" }, { text: "region:BI", value: "BI" }, { text: "region:KH", value: "KH" }, { text: "region:CM", value: "CM" }, { text: "region:CA", value: "CA" }, { text: "region:CV", value: "CV" }, { text: "region:KY", value: "KY" }, { text: "region:CF", value: "CF" }, { text: "region:TD", value: "TD" }, { text: "region:CL", value: "CL" }, { text: "region:CN", value: "CN" }, { text: "region:CX", value: "CX" }, { text: "region:CC", value: "CC" }, { text: "region:MF", value: "MF" }, { text: "region:CO", value: "CO" }, { text: "region:KM", value: "KM" }, { text: "region:CK", value: "CK" }, { text: "region:CR", value: "CR" }, { text: "region:HR", value: "HR" }, { text: "region:CU", value: "CU" }, { text: "region:CW", value: "CW" }, { text: "region:CY", value: "CY" }, { text: "region:CZ", value: "CZ" }, { text: "region:CD", value: "CD" }, { text: "region:DK", value: "DK" }, { text: "region:DJ", value: "DJ" }, { text: "region:DM", value: "DM" }, { text: "region:DO", value: "DO" }, { text: "region:TL", value: "TL" }, { text: "region:EC", value: "EC" }, { text: "region:EG", value: "EG" }, { text: "region:SV", value: "SV" }, { text: "region:GQ", value: "GQ" }, { text: "region:ER", value: "ER" }, { text: "region:EE", value: "EE" }, { text: "region:SZ", value: "SZ" }, { text: "region:ET", value: "ET" }, { text: "region:FK", value: "FK" }, { text: "region:FO", value: "FO" }, { text: "region:FM", value: "FM" }, { text: "region:FJ", value: "FJ" }, { text: "region:FI", value: "FI" }, { text: "region:FR", value: "FR" }, { text: "region:GF", value: "GF" }, { text: "region:PF", value: "PF" }, { text: "region:TF", value: "TF" }, { text: "region:GA", value: "GA" }, { text: "region:GE", value: "GE" }, { text: "region:DE", value: "DE" }, { text: "region:GH", value: "GH" }, { text: "region:GI", value: "GI" }, { text: "region:GR", value: "GR" }, { text: "region:GL", value: "GL" }, { text: "region:GD", value: "GD" }, { text: "region:GP", value: "GP" }, { text: "region:GU", value: "GU" }, { text: "region:GT", value: "GT" }, { text: "region:GN", value: "GN" }, { text: "region:GW", value: "GW" }, { text: "region:GY", value: "GY" }, { text: "region:HT", value: "HT" }, { text: "region:HM", value: "HM" }, { text: "region:VA", value: "VA" }, { text: "region:HN", value: "HN" }, { text: "region:HK", value: "HK" }, { text: "region:HU", value: "HU" }, { text: "region:IS", value: "IS" }, { text: "region:IN", value: "IN" }, { text: "region:ID", value: "ID" }, { text: "region:IR", value: "IR" }, { text: "region:IQ", value: "IQ" }, { text: "region:IM", value: "IM" }, { text: "region:IL", value: "IL" }, { text: "region:IT", value: "IT" }, { text: "region:CI", value: "CI" }, { text: "region:JM", value: "JM" }, { text: "region:JP", value: "JP" }, { text: "region:JE", value: "JE" }, { text: "region:JO", value: "JO" }, { text: "region:KZ", value: "KZ" }, { text: "region:KE", value: "KE" }, { text: "region:KI", value: "KI" }, { text: "region:KW", value: "KW" }, { text: "region:KG", value: "KG" }, { text: "region:LA", value: "LA" }, { text: "region:LV", value: "LV" }, { text: "region:LB", value: "LB" }, { text: "region:LS", value: "LS" }, { text: "region:LR", value: "LR" }, { text: "region:LY", value: "LY" }, { text: "region:LI", value: "LI" }, { text: "region:LT", value: "LT" }, { text: "region:LU", value: "LU" }, { text: "region:MO", value: "MO" }, { text: "region:MG", value: "MG" }, { text: "region:MW", value: "MW" }, { text: "region:MY", value: "MY" }, { text: "region:MV", value: "MV" }, { text: "region:ML", value: "ML" }, { text: "region:MT", value: "MT" }, { text: "region:MH", value: "MH" }, { text: "region:MQ", value: "MQ" }, { text: "region:MR", value: "MR" }, { text: "region:MU", value: "MU" }, { text: "region:YT", value: "YT" }, { text: "region:MX", value: "MX" }, { text: "region:MD", value: "MD" }, { text: "region:MC", value: "MC" }, { text: "region:MN", value: "MN" }, { text: "region:ME", value: "ME" }, { text: "region:MS", value: "MS" }, { text: "region:MA", value: "MA" }, { text: "region:MZ", value: "MZ" }, { text: "region:MM", value: "MM" }, { text: "region:NA", value: "NA" }, { text: "region:NR", value: "NR" }, { text: "region:NP", value: "NP" }, { text: "region:NL", value: "NL" }, { text: "region:NC", value: "NC" }, { text: "region:NZ", value: "NZ" }, { text: "region:NI", value: "NI" }, { text: "region:NE", value: "NE" }, { text: "region:NG", value: "NG" }, { text: "region:NU", value: "NU" }, { text: "region:NF", value: "NF" }, { text: "region:KP", value: "KP" }, { text: "region:MK", value: "MK" }, { text: "region:MP", value: "MP" }, { text: "region:NO", value: "NO" }, { text: "region:OM", value: "OM" }, { text: "region:PK", value: "PK" }, { text: "region:PW", value: "PW" }, { text: "region:PA", value: "PA" }, { text: "region:PG", value: "PG" }, { text: "region:PY", value: "PY" }, { text: "region:PE", value: "PE" }, { text: "region:PH", value: "PH" }, { text: "region:PN", value: "PN" }, { text: "region:PL", value: "PL" }, { text: "region:PT", value: "PT" }, { text: "region:PR", value: "PR" }, { text: "region:QA", value: "QA" }, { text: "region:IE", value: "IE" }, { text: "region:CG", value: "CG" }, { text: "region:RO", value: "RO" }, { text: "region:RU", value: "RU" }, { text: "region:RW", value: "RW" }, { text: "region:RE", value: "RE" }, { text: "region:BL", value: "BL" }, { text: "region:SH", value: "SH" }, { text: "region:KN", value: "KN" }, { text: "region:LC", value: "LC" }, { text: "region:PM", value: "PM" }, { text: "region:VC", value: "VC" }, { text: "region:WS", value: "WS" }, { text: "region:SM", value: "SM" }, { text: "region:SA", value: "SA" }, { text: "region:SN", value: "SN" }, { text: "region:RS", value: "RS" }, { text: "region:SC", value: "SC" }, { text: "region:SL", value: "SL" }, { text: "region:SG", value: "SG" }, { text: "region:SX", value: "SX" }, { text: "region:SK", value: "SK" }, { text: "region:SI", value: "SI" }, { text: "region:SB", value: "SB" }, { text: "region:SO", value: "SO" }, { text: "region:ZA", value: "ZA" }, { text: "region:GS", value: "GS" }, { text: "region:KR", value: "KR" }, { text: "region:SS", value: "SS" }, { text: "region:ES", value: "ES" }, { text: "region:LK", value: "LK" }, { text: "region:PS", value: "PS" }, { text: "region:SD", value: "SD" }, { text: "region:SR", value: "SR" }, { text: "region:SJ", value: "SJ" }, { text: "region:SE", value: "SE" }, { text: "region:CH", value: "CH" }, { text: "region:SY", value: "SY" }, { text: "region:ST", value: "ST" }, { text: "region:TW", value: "TW" }, { text: "region:TJ", value: "TJ" }, { text: "region:TZ", value: "TZ" }, { text: "region:TH", value: "TH" }, { text: "region:BS", value: "BS" }, { text: "region:GM", value: "GM" }, { text: "region:TG", value: "TG" }, { text: "region:TK", value: "TK" }, { text: "region:TO", value: "TO" }, { text: "region:TT", value: "TT" }, { text: "region:TN", value: "TN" }, { text: "region:TR", value: "TR" }, { text: "region:TM", value: "TM" }, { text: "region:TC", value: "TC" }, { text: "region:TV", value: "TV" }, { text: "region:UG", value: "UG" }, { text: "region:UA", value: "UA" }, { text: "region:AE", value: "AE" }, { text: "region:GB", value: "GB" }, { text: "region:VI", value: "VI" }, { text: "region:UM", value: "UM" }, { text: "region:US", value: "US" }, { text: "region:UY", value: "UY" }, { text: "region:UZ", value: "UZ" }, { text: "region:VU", value: "VU" }, { text: "region:VE", value: "VE" }, { text: "region:VN", value: "VN" }, { text: "region:WF", value: "WF" }, { text: "region:EH", value: "EH" }, { text: "region:YE", value: "YE" }, { text: "region:ZM", value: "ZM" }, { text: "region:ZW", value: "ZW" }, { text: "region:AX", value: "AX" }]
				},
				cursorLighting: {
					component: 'switch',
					text: 'cursorLighting',
				},
				search: {
					component: 'section',
					variant: 'card',
					title: 'Youtube_Search',
					remove_related_search_results: {
						component: 'switch',
						text: 'removeRelatedSearchResults'
					},
					open_new_tab: {
						component: "switch",
						text: "openNewTab",
					},
					remove_shorts_reel_search_results: {
						component: 'switch',
						text: 'removeShortsReelSearchResults'
					}
				},
				redirect_shorts_to_watch: {
					component: 'switch',
					text: 'ShortsForceTheStandardPlayer',
				},
				remove_home_page_shorts: {
					component: 'switch',
					text: 'hideHomePageShorts',
					id: 'remove-home-page-shorts'
				},
				remove_subscriptions_shorts: {
					component: 'switch',
					text: 'atSubscriptions',
					id: 'remove-subscriptions-shorts'
				},
				remove_subscriptions_live_streams: {
					component: 'switch',
					text: 'removeSubscriptionsLiveStreams',
					id: 'remove-subscriptions-live-streams'
				},
				remove_trending_shorts: {
					component: 'switch',
					text: 'atTrending'
				},
				remove_history_shorts: {
					component: 'switch',
					text: 'atHistory'
				},
				remove_playables: {
					component: 'switch',
					text: 'removePlayables',
					id: 'remove-playables'
				},
				remove_top_live_games: {
					component: 'switch',
					text: 'removeTopLiveGames',
					id: 'remove-top-live-games'
				},
				hide_ai_summary: {
					component: 'switch',
					text: 'hideAISummary',
					id: 'hide-ai-summary'
				},
				remove_subscriptions_most_relevant: {
					component: 'switch',
					text: 'removeSubscriptionsMostRelevant',
					id: 'remove-subscriptions-most-relevant'
				},
				subscriptions_list_layout: {
					component: 'switch',
					text: 'subscriptionsListLayout',
					id: 'subscriptions-list-layout'
				},
				youtube_home_page: {
					component: 'select',
					text: 'youtubeHomePage',
					options: [{
						text: 'home',
						value: '/'
					}, {
						text: 'trending',
						value: '/feed/trending'
					}, {
						text: 'subscriptions',
						value: '/feed/subscriptions'
					}, {
						text: 'history',
						value: '/feed/history'
					}, {
						text: 'watchLater',
						value: '/playlist?list=WL'
					}, {
						text: 'search',
						value: 'search'
					}, {
						text: 'liked',
						value: '/playlist?list=LL'
					}, {
						text: 'library',
						value: '/feed/library'
					}, {
						text: 'withoutVideos',
						value: 'hidecontent'
					}],
					tags: 'trending,subscriptions,history,watch,search,undistracted,zen'
				},
				left: {
					component: 'section',
					variant: 'card',
					title: 'Left_Side_Menu',
					sticky_navigation: {
						component: "switch",
						text: 'stickyNavigation',
						tags: 'navigation,auto-hide,sidebar'
					},
					collapse_of_subscription_sections: {
						component: 'switch',
						text: 'collapseOfSubscriptionSections'
					}
				},
				ads: {
					text: 'ads',
					component: 'select',
					options: [{
						text: 'onAllVideos',
						value: 'all_videos',
						default: 'true'
					}, {
						text: 'blockAll',
						value: 'block_all'
					}, {
						text: 'onSmallCreators',
						value: 'small_creators'
					}, {
						text: 'onSubscribedChannels',
						value: 'subscribed_channels'
					}, {
						text: 'blockMusic',
						value: 'block_music'
					}],
					storage: 'ads',

					on: {
						change: function (event) {
							const selectedValue = event.target.value;

							// Perform actions based on the selected value
							const numberOfSubscribersInput = this.parentNode.querySelector('.count-component');
							if (selectedValue === 'small_creators') {
								numberOfSubscribersInput.style.display = 'flex';
							} else {
								numberOfSubscribersInput.style.display = 'none';
							}
						}
					}
				},
				count: {
					component: 'countComponent',
					class: "count-component",
				},
				hide_banner_ads: {
					component: 'switch',
					text: 'hideBannerAds'
				},
				hide_merch_shelf: {
					component: 'switch',
					text: 'hideMerchShelf'
				},
				hide_suggested_action: {
					component: 'switch',
					text: 'hideSuggestedAction'
				},
				hide_sponsored_videos_home: {
					component: 'switch',
					text: 'hideSponsoredVideosOnHome'
				}
			},
			embed: {
				component: 'section',
				variant: 'card',
				title: 'Embedded_YouTube',

				embeddedHidePauseOverlay: {
					component: 'switch',
					text: 'Hide_Pause_Overlay',
				},
				embeddedHideYoutubeLogo: {
					component: 'switch',
					text: 'Hide_YouTube_Logo'
				},
				embeddedHideShare: {
					component: 'switch',
					text: 'embedded_Hide_Share'
				}
			},
			section_3: {
				component: 'section',
				variant: 'card',
				title: 'thumbnails',
				hide_animated_thumbnails: {
					component: 'switch',
					text: 'hideAnimatedThumbnails',
					tags: 'preview'
				},
				disable_thumbnail_playback: {
					component: 'switch',
					text: 'disableThumbnailPlayback',
				},
				mute_thumbnail_previews: {
					component: 'switch',
					text: 'muteThumbnailPreviews',
					tags: 'preview mute audio sound'
				},
				popup_window_buttons: {
					component: 'switch',
					text: 'popupWindowButtons',
				},
				watch_later_buttons: {
					component: 'select',
					text: 'watchLaterButtons',
					options: [{
						text: 'disabled',
						value: 'disabled'
					}, {
						text: 'hover',
						value: 'hover'
					}, {
						text: 'always',
						value: 'always'
					}],
					tags: 'watch later save thumbnail'
				},
				hide_thumbnail_overlay: {
					component: 'switch',
					text: 'hideThumbnailOverlay',
					tags: 'preview'
				},
				hide_thumbnail_icon: {
					component: "switch",
					text: "hideThumbnailIcon",
					tags: "preview",
				},
				hide_thumbnail_dots: {
					component: 'switch',
					text: 'hideThumbnailDots',
					tags: 'preview'
				},
				squared_thumbnails: {
					component: 'switch',
					text: 'squaredThumbnails',
					tags: 'thumbnail square radius rounded corners'
				},
				thumbnails_quality: {
					component: 'select',
					text: 'thumbnailsQuality',
					options: [{
						text: 'default',
						value: 'null'
					}, {
						text: 'low',
						value: 'default'
					}, {
						text: 'medium',
						value: 'mqdefault'
					}, {
						text: 'high',
						value: 'hqdefault'
					}, {
						text: 'sd',
						value: 'sddefault'
					}, {
						text: 'hd',
						value: 'maxresdefault'
					}],
					tags: 'preview quality',
					on: {
						render: function () {
							var lowResolution = window.screen.width * window.screen.height * Math.pow(window.devicePixelRatio || 1, 2) < 2073600,
								value = satus.storage.get('thumbnails_quality');
							this.style.display = lowResolution ? 'none' : '';
							if (lowResolution && value && value !== 'null') {
								satus.storage.set('thumbnails_quality_previous', value);
								satus.storage.set('thumbnails_quality', 'null');
							} else {
								var	previous = satus.storage.get('thumbnails_quality_previous');
								if (!lowResolution && (!value || value === 'null') && previous) {
									satus.storage.set('thumbnails_quality', previous);
								}
							}
						}
					}
				},
				change_thumbnails_per_row: {
					component: 'select',
					text: 'changeThumbnailsPerRow',
					options: [{
						text: 'default',
						value: 'default'
					}, {
						text: '4',
						value: '4'
					}, {
						text: '3',
						value: '3'
					}, {
						text: '5',
						value: '5'
					}, {
						text: '6',
						value: '6'
					}, {
						text: '7',
						value: '7'
					}, {
						text: '8',
						value: '8'
					}, {
						text: '9',
						value: '9'
					}, {
						text: '10',
						value: '10'
					}, {
						text: '11 (experimental)',
						value: '11'
					}, {
						text: '12 (experimental)',
						value: '12'
					}, {
						text: '2',
						value: '2'
					}, {
						text: '1',
						value: '1'
					}],
					tags: 'change thumbnails per row'
				},
				thumbnail_size: {
					component: "select",
					text: "thumbnailSize",
					options: [
						{ text: "Large", value: "large" },
						{ text: "Medium", value: "medium" },
						{ text: "Default", value: "default" },
						{ text: "Small", value: "small" },
						{ text: "x-small", value: "x-small" },
						{ text: "xx-small", value: "xx-small" }
					]
				},
				larger_thumbnail_metadata: {
					component: 'switch',
					text: 'largerThumbnailMetadata',
					tags: 'channel name views age font size metadata'
				},
				classic_thumbnail_metadata: {
					component: 'switch',
					text: 'classicThumbnailMetadata',
					tags: 'thumbnail metadata views ago play icon interpunct dot divider classic restore'
				},
				show_last_watched_overlay: {
					component: 'switch',
					text: 'showLastWatchedOverlay',
					value: true, // default aktiv
					tags: 'history overlay'
				},
				last_watched_overlay_position: {
					component: 'select',
					text: 'lastWatchedOverlayPosition',
					storage: 'last_watched_overlay_position',
					options: [
						{ value: 'bottom-right', text: 'bottomRight' },
						{ value: 'bottom-left', text: 'bottomLeft' },
						{ value: 'top-right', text: 'topRight' },
						{ value: 'top-left', text: 'topLeft' }
					],
					value: 'bottom-right'
				},
				last_watched_format: {
					component: 'select',
					text: 'lastWatchedFormat',
					storage: 'last_watched_format',
					options: [
						{ value: 'relative', text: 'relative' },
						{ value: 'exact', text: 'exact' }
					],
					value: 'relative'
				},
				thumbnail_grayscale:{
					component: 'select',
					text: 'thumbnailGrayscale',
					options: [
						{ value: '0', text: 'Disabled'},
						{ value: '25', text: '25%'},
						{ value: '50', text: '50%'},
						{ value: '75', text: '75%'},
						{ value: '100', text: '100%'},

					]
				}
			}, section_2: {
				component: 'section',
				variant: 'card',
				title: 'watchedVideos',

				mark_watched_videos: {
					component: 'switch',
					text: 'markWatchedVideos',
					on: {
						click: function () {
							setTimeout(() => {
								if (satus.storage.get('mark_watched_videos')) {
									if (!satus.storage.get('track_watched_videos')) {
										this.nextSibling.click();
									}
								}
							}, 250);
						}
					}
				},
				track_watched_videos: {
					component: 'switch',
					text: 'trackWatchedVideos'
				},
				hide_watched_videos: {
					component: 'switch',
					text: 'hideWatchedVideos'
				},
				hide_watch_later: {
					component: 'switch',
					text: 'Hide Watch Later Videos'
				},
				delete_watched_videos: {
					component: 'button',
					text: 'deleteWatchedVideos',
					style: {
						justifyContent: 'space-between'
					},
					on: {
						click: {
							component: 'modal',
							variant: 'confirm',
							content: 'thisWillRemoveAllWatchedVideos',
							buttons: {
								cancel: {
									component: 'button',
									text: 'cancel',
									on: {
										click: function () {
											this.modalProvider.close();
										}
									}
								},
								reset: {
									component: 'button',
									text: 'accept',
									on: {
										click: function () {
											var modal = this.parentNode.parentNode.parentNode;

											satus.storage.remove('watched');

											modal.skeleton.parentSkeleton.counter.rendered.textContent = '0';

											modal.close();
										}
									}
								}
							}
						}
					},

					counter: {
						component: 'span',
						style: {
							opacity: .64
						},
						on: {
							render: function () {
								var watched = satus.storage.get('watched');

								if (watched) {
									this.textContent = Object.keys(watched).length;
								} else {
									this.textContent = '0';
								}
							}
						}
					}
				}
			},
			section_4: {
				component: 'section',
				variant: 'card',
				title: 'more',
				confirmation_before_closing: {
					component: 'switch',
					text: 'confirmationBeforeClosing',
					tags: 'random prevent close exit'
				},
				font: {
					component: 'select',
					text: 'font',
					options: [{
						text: 'default',
						value: 'Default'
					}, {
						text: 'Comfortaa',
						value: 'Comfortaa'
					}, {
						text: 'Lato',
						value: 'Lato'
					}, {
						text: 'Marriweather',
						value: 'Marriweather'
					}, {
						text: 'Montserrat',
						value: 'Montserrat'
					}, {
						text: 'Noto Sans',
						value: 'Noto+Sans'
					}, {
						text: 'Open Sans',
						value: 'Open+Sans'
					}, {
						text: 'Oswald',
						value: 'Oswald'
					}, {
						text: 'Poppins',
						value: 'Poppins'
					}, {
						text: 'PT Sans',
						value: 'PT+Sans'
					}, {
						text: 'Raleway',
						value: 'Raleway'
					}, {
						text: 'Roboto Condensed',
						value: 'Roboto+Condensed'
					}, {
						text: 'Roboto Mono',
						value: 'Roboto+Mono'
					}, {
						text: 'Roboto Slab',
						value: 'Roboto+Slab'
					}, {
						text: 'Source Sans Pro',
						value: 'Source+Sans+Pro'
					}]
				},
				scroll_bar: {
					component: 'select',
					text: 'scrollBar',
					options: [{
						text: 'default',
						value: 'default'
					}, {
						text: 'hidden',
						value: 'hidden'
					}]
				},
				add_scroll_to_top: {
					component: 'switch',
					text: 'addScrollToTop',
					tags: 'up'
				},
				remove_member_only: {
					component: 'switch',
					text: 'removeMemberOnly',
				},
				remove_context_buttons: {
					component: 'switch',
					text: 'removeContextButtons',
				},
				remove_list_param_from_links: {
					component: 'switch',
					text: 'removePlaylistParam'
				},
				clickable_links_in_description: {
					component: 'switch',
					text: 'clickableLinksInDescription'
				},
				category_refresh_button: {
					component: 'switch',
					text: 'categoryRefreshButton'
				},
				auto_video_recovery: {
					component: 'switch',
					text: 'autoVideoRecovery',
					tags: 'network reconnect resume playback internet connection unstable'
				}
			}
		}
	},
	icon: {
		component: 'span',

		svg: {
			component: 'svg',
			attr: {
				'viewBox': '0 0 24 24',
				'fill': 'none',
				'stroke': 'currentColor',
				'stroke-linecap': 'round',
				'stroke-width': '1.75'
			},

			path: {
				component: 'path',
				attr: {
					'd': 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7'
				}
			}
		}
	},
	label: {
		component: 'span',
		text: 'general'
	}
};
