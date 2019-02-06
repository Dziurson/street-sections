import { Road } from "src/models/road";

export const roadList: Road[] = [
    { "name": "Adama Mickiewicza", "lanes": null, "surface": null, "maxspeed": null, "oneway": null, object: '', junction: null },
    { "name": "Adama Mickiewicza", "lanes": null, "surface": null, "maxspeed": null, "oneway": null, object: '', junction: null },
    { "name": "Adama Mickiewicza", "lanes": "2", "surface": "asphalt", "maxspeed": null, "oneway": "yes", object: '', junction: null },
    { "name": "Adama Mickiewicza", "lanes": "2", "surface": "asphalt", "maxspeed": "50", "oneway": null, object: '', junction: null },
    { "name": "Adama Mickiewicza", "lanes": "2", "surface": null, "maxspeed": "50", "oneway": "no", object: '', junction: null }
];

export const boundary = "POLYGON((22.6746723 50.5305109,22.6756596 50.5294179,22.6770489 50.5279026,22.6780564 50.5267248,22.6780605 50.5267201,22.679482 50.5253221,22.6801844 50.5203832,22.680268 50.5201631,22.6804014 50.5191106,22.6804428 50.518903,22.6809741 50.5149769,22.6809874 50.5149078,22.6810703 50.5145864,22.6810716 50.5145788,22.6811345 50.5140883,22.681136 50.5140769,22.6811678 50.5139353,22.6811836 50.5137954,22.6812188 50.5137775,22.6812366 50.5136427,22.6818616 50.5134369,22.6821801 50.5132371,22.6824191 50.5131421,22.682622 50.5131164,22.6828065 50.5131528,22.683058 50.513315,22.6831703 50.5133637,22.6837436 50.513611,22.6840559 50.5137882,22.6841866 50.5138981,22.6842665 50.5140555,22.6842985 50.5142861,22.6841929 50.5144615,22.6844178 50.5146385,22.6845205 50.514859,22.6844996 50.5150899,22.6845672 50.5151292,22.6849193 50.5152323,22.6849838 50.5153105,22.6850172 50.5154498,22.6848386 50.5156727,22.6848285 50.5158059,22.6849255 50.5159013,22.6852106 50.5158626,22.6856521 50.5159538,22.6858956 50.5162292,22.6865747 50.5162077,22.687151 50.5164473,22.6879329 50.5165421,22.6880654 50.5164687,22.6892299 50.5168501,22.6896751 50.5168643,22.6906474 50.5172375,22.6910753 50.5168633,22.6914853 50.5169427,22.6917706 50.5171581,22.6916458 50.5174642,22.6919311 50.5176116,22.6923055 50.5174528,22.6926799 50.5175095,22.6929473 50.5177136,22.6943286 50.5178221,22.6945738 50.5181925,22.6971658 50.5187035,22.6974052 50.5186494,22.6975958 50.5186487,22.6978981 50.5188722,22.698095 50.518838,22.6981995 50.5187754,22.6984196 50.5187986,22.6986484 50.5189545,22.6991556 50.5189027,22.6995198 50.5188011,22.6997334 50.5187238,22.6999062 50.5188651,22.7000841 50.5187261,22.7002755 50.5186498,22.7009135 50.5185413,22.70097 50.5184598,22.7008868 50.5183293,22.700709 50.5181074,22.7007125 50.518049,22.7008154 50.5179824,22.7012817 50.5179122,22.7013957 50.5179247,22.70159 50.5180233,22.7016917 50.518214,22.7017883 50.51827,22.7021046 50.5183093,22.7022402 50.5183466,22.7025354 50.518542,22.7027174 50.5187246,22.702854 50.5187774,22.7028829 50.5187809,22.7033826 50.5189056,22.7033921 50.5188925,22.703409 50.5188433,22.7032664 50.5187572,22.7031052 50.5186464,22.703152 50.5185696,22.7031601 50.5184896,22.7032606 50.5184028,22.7035556 50.5183456,22.7036434 50.5182337,22.7038451 50.5181572,22.7042353 50.5181241,22.704377 50.5180601,22.7045278 50.5179064,22.7046662 50.517876,22.7047922 50.5178903,22.7049989 50.5179462,22.7052479 50.5180723,22.705434 50.518194,22.7055805 50.5183154,22.7055456 50.5184921,22.7055211 50.5185421,22.7056338 50.5186229,22.7061418 50.5183892,22.7064881 50.5182543,22.7075648 50.517804,22.7076854 50.5177646,22.7078355 50.5177078,22.7086548 50.5173548,22.7116036 50.5161093,22.7117855 50.5160252,22.7119594 50.5159513,22.7120695 50.5159081,22.7141565 50.5150139,22.7142579 50.5149795,22.7158628 50.5143904,22.7159776 50.5143597,22.716073 50.5143524,22.7162156 50.5143679,22.7164857 50.5144274,22.7164894 50.5143888,22.7165151 50.51433,22.7188419 50.5156882,22.7207482 50.5168355,22.7229965 50.5181604,22.7234732 50.5184492,22.7283678 50.5213595,22.7284428 50.5214601,22.72863 50.5214903,22.7288449 50.5215362,22.7290514 50.5215593,22.7292223 50.5216407,22.7294229 50.5217149,22.7295051 50.5217244,22.7296219 50.5217127,22.7297353 50.5216582,22.7298445 50.5214347,22.7298986 50.5213607,22.729986 50.5213271,22.7301265 50.5212907,22.730284 50.5212835,22.7303796 50.5213331,22.7304677 50.5213876,22.7305709 50.5214832,22.7306719 50.5215493,22.7308145 50.5216462,22.7312111 50.5214506,22.7313101 50.5214377,22.7314229 50.521468,22.7314699 50.5214912,22.7315152 50.5215502,22.7315472 50.5216718,22.7315272 50.5217139,22.7315109 50.5217139,22.731457 50.5217763,22.731457 50.5218486,22.7314907 50.5219049,22.731576 50.5219817,22.7317586 50.5220179,22.7318451 50.5220243,22.7321606 50.5220195,22.7324815 50.5219596,22.732604 50.521984,22.7326464 50.521981,22.7326617 50.5219706,22.7327776 50.5220342,22.7329789 50.5220342,22.7330178 50.5220202,22.7330372 50.5220073,22.7330684 50.5219398,22.7330684 50.521877,22.7329126 50.5217643,22.7328661 50.5217655,22.7329064 50.5217167,22.733012 50.5216949,22.7332257 50.521722,22.7332802 50.5217914,22.7332202 50.5218313,22.7332434 50.5218716,22.7333228 50.5218963,22.733369 50.5219466,22.7333873 50.5219441,22.7333992 50.5219612,22.7335808 50.5219391,22.7336864 50.5218359,22.7337706 50.5218136,22.7338741 50.5218595,22.7338959 50.5219353,22.7340064 50.5219952,22.7341409 50.5220114,22.7341939 50.5219982,22.7343458 50.5219098,22.7344539 50.5219166,22.7346105 50.5220425,22.7346042 50.5220654,22.7345653 50.5220684,22.7345917 50.5221171,22.7346974 50.5221513,22.7349055 50.5221757,22.7351205 50.52219,22.7352511 50.5221386,22.7352705 50.5221838,22.7352451 50.5222022,22.7349163 50.5223117,22.7349628 50.522368,22.7350779 50.5224615,22.73514 50.5224995,22.735393 50.5226012,22.7355179 50.5227191,22.7356351 50.5227604,22.7358322 50.522672,22.7358531 50.5226533,22.7360991 50.5225278,22.7362033 50.5225304,22.7362443 50.5225464,22.7362625 50.5226073,22.7362031 50.5225851,22.7361433 50.5225898,22.7361257 50.5226494,22.7361767 50.5227271,22.7362201 50.522755,22.7366957 50.5227952,22.73681 50.5228176,22.73697 50.522801,22.7370094 50.5227689,22.737 50.522667,22.7368817 50.5225929,22.7367071 50.5225218,22.7365873 50.5225357,22.7365563 50.5225021,22.7366257 50.5224431,22.7367414 50.5224115,22.7369368 50.5224086,22.7369937 50.5223697,22.7369896 50.5222866,22.7370617 50.5221747,22.7371538 50.5221858,22.7375832 50.5224482,22.7376217 50.5224482,22.7376274 50.5225153,22.7375579 50.5225629,22.7372828 50.5226655,22.7372575 50.5227049,22.7373297 50.5228091,22.7375689 50.5228385,22.7375885 50.5228432,22.7376794 50.5228336,22.7378229 50.522794,22.7380051 50.5227768,22.7380629 50.5228462,22.738028 50.5228469,22.7379253 50.522904,22.7378864 50.5229747,22.7379454 50.5230196,22.7381636 50.5230335,22.738429 50.522934,22.7384036 50.5228375,22.7384264 50.5227391,22.738579 50.5226455,22.7386693 50.522544,22.7389504 50.5225222,22.7391744 50.5225327,22.7394792 50.5226943,22.7397514 50.522706,22.7398526 50.5226527,22.7399023 50.5225673,22.7398899 50.5224881,22.7397332 50.522398,22.7394527 50.5222852,22.7393624 50.5221553,22.7392889 50.5221301,22.7392755 50.5221075,22.739482 50.522131,22.7395427 50.5221177,22.7395995 50.5220873,22.7396246 50.5220427,22.739567 50.5219158,22.7399222 50.5218797,22.7399543 50.5219559,22.7398522 50.522024,22.7397926 50.5220147,22.7396913 50.5220375,22.7396464 50.5220711,22.7396344 50.5221196,22.7398039 50.5222154,22.7401746 50.5222538,22.7402335 50.5223151,22.7402718 50.5223263,22.7403426 50.5222988,22.7404007 50.5222286,22.740431 50.522126,22.7403669 50.521971,22.7404109 50.5219739,22.7404976 50.5220887,22.7405896 50.5221787,22.7406043 50.5223651,22.7406332 50.522394,22.7406872 50.5224092,22.740877 50.5223768,22.7411064 50.522319,22.7412422 50.5222529,22.7412628 50.5221833,22.7412499 50.5221582,22.7411589 50.522094,22.741084 50.5220807,22.741084 50.5220783,22.7411764 50.5220326,22.741208 50.5219831,22.741184 50.521928,22.7411172 50.5218458,22.7411561 50.5218478,22.7412064 50.5219038,22.7413574 50.5219728,22.741417 50.5219651,22.7414737 50.5219031,22.7414816 50.5219002,22.7414874 50.5218034,22.7415804 50.5217306,22.7415943 50.5216862,22.7416599 50.5216705,22.741787 50.5217213,22.7418169 50.5217378,22.7418765 50.5217763,22.7419188 50.5218292,22.7419753 50.5219448,22.7420268 50.5219651,22.7422322 50.5219782,22.7423523 50.5219114,22.742289 50.5216045,22.742339 50.5215221,22.7421217 50.521396,22.7422013 50.5213557,22.7425141 50.5212732,22.7425908 50.5212641,22.7427121 50.521375,22.7426622 50.5214333,22.7426154 50.5214205,22.7425402 50.5214308,22.7424984 50.5215179,22.7425822 50.5215861,22.742808 50.5216562,22.742835 50.521745,22.7428562 50.5217696,22.7429435 50.5217885,22.7431456 50.5217496,22.7432917 50.521659,22.743472 50.5216869,22.7434935 50.5216523,22.7434776 50.5215062,22.7434539 50.5214014,22.7433731 50.5213006,22.7434248 50.5212617,22.7435823 50.5212092,22.7436369 50.5212097,22.7436403 50.521265,22.7435994 50.5213092,22.7436531 50.5213654,22.7437499 50.5213816,22.7437571 50.5213809,22.74381 50.5213776,22.7440856 50.521259,22.7441855 50.5212481,22.7442454 50.5212969,22.7442559 50.5213672,22.7442039 50.5213768,22.7442007 50.5214322,22.7441965 50.5214367,22.7442805 50.5216347,22.7443776 50.5216323,22.7444672 50.5216089,22.7445931 50.521377,22.7445929 50.52137,22.7445761 50.5213439,22.7445797 50.5213399,22.744614 50.5212768,22.7447049 50.5212654,22.7448131 50.5212983,22.744841 50.5213076,22.7448565 50.5213032,22.744974 50.5212497,22.7449798 50.5212193,22.7448444 50.5210314,22.7448855 50.5209817,22.7448929 50.5209195,22.7448246 50.5208585,22.7447143 50.5208429,22.7445418 50.5208518,22.744496 50.5208192,22.7444967 50.5207763,22.7444232 50.5207027,22.744344 50.5206705,22.7443039 50.5206291,22.7443143 50.5206042,22.7443817 50.5205788,22.744426 50.5205441,22.7445428 50.5205381,22.7446036 50.5205235,22.7446375 50.5205148,22.7446821 50.5205248,22.7447279 50.520487,22.7447295 50.5204658,22.7447944 50.5204897,22.7448273 50.5205029,22.74483 50.5205079,22.7451197 50.5207691,22.745186 50.5207938,22.7457181 50.5212782,22.7452416 50.5215186,22.7446957 50.5219138,22.7449999 50.5226109,22.7459167 50.5228869,22.7460542 50.5233849,22.7445359 50.5239748,22.7440829 50.5234787,22.7431381 50.5236734,22.7430343 50.5243235,22.7436355 50.5242375,22.7440179 50.5243137,22.74423 50.5241489,22.7445997 50.5242044,22.7440971 50.5244981,22.7441259 50.5245896,22.743849 50.5246628,22.7437128 50.5243767,22.743298 50.5244661,22.7432872 50.5247195,22.74348 50.5248116,22.7433691 50.5252505,22.7423101 50.5252196,22.7422059 50.5256578,22.7421566 50.5258501,22.7422247 50.5259287,22.7443485 50.5259219,22.7444541 50.5258532,22.7464322 50.5258065,22.7466427 50.5259494,22.7480816 50.5260781,22.7481156 50.5267701,22.7483196 50.5267956,22.7483016 50.5270866,22.7479105 50.5270706,22.7477333 50.5272575,22.7471953 50.5273455,22.7463992 50.5273498,22.7460629 50.527503,22.7451367 50.5275181,22.7445618 50.5284172,22.7450726 50.5285116,22.7451343 50.5288692,22.7441336 50.5288318,22.7437181 50.5284468,22.7435315 50.5287496,22.742347 50.5298681,22.7421708 50.5310199,22.7442996 50.5320996,22.7410222 50.5330318,22.7415461 50.533844,22.7422316 50.5348099,22.7440455 50.5358316,22.7458308 50.534666,22.7464536 50.5349964,22.7450659 50.5364336,22.7457037 50.536789,22.7483148 50.5383325,22.7472742 50.5392972,22.7460133 50.5402244,22.7448214 50.5420462,22.7446686 50.5446922,22.7423829 50.5453487,22.7421994 50.5457743,22.7407769 50.5457234,22.7407159 50.5462142,22.7397177 50.5462863,22.7396997 50.5462865,22.7379605 50.5469776,22.7387229 50.5471992,22.7400655 50.5474488,22.7388464 50.5479099,22.7382052 50.5481271,22.7395051 50.5485987,22.7399174 50.548321,22.7411034 50.5486933,22.7420173 50.5489636,22.7431304 50.5492649,22.743714 50.5491747,22.744227 50.5494386,22.7447801 50.5496324,22.7444586 50.5503542,22.7446748 50.55042,22.7456311 50.5507597,22.7458478 50.5508597,22.7459902 50.5509106,22.7462684 50.5506378,22.7487432 50.5515316,22.7485069 50.551805,22.7484599 50.5518613,22.7484875 50.5520292,22.7462702 50.5512522,22.7465356 50.5527341,22.7444128 50.5528916,22.7444443 50.5530859,22.7446832 50.5544306,22.7448279 50.557068,22.7454793 50.557817,22.7415109 50.5598272,22.7375181 50.5618444,22.7365415 50.5611608,22.7362431 50.5611718,22.7354347 50.5604543,22.7353287 50.5604338,22.7353123 50.560425,22.7351592 50.560389,22.7348528 50.5602709,22.7346345 50.5598868,22.7342559 50.5598563,22.7340757 50.5596354,22.7335444 50.559588,22.7331085 50.5593135,22.7324382 50.5589637,22.7321785 50.5589918,22.7321616 50.5588931,22.7318979 50.5583978,22.7315455 50.5581635,22.731476 50.5579125,22.7310496 50.5577876,22.730774 50.5571004,22.7301042 50.557202,22.7302228 50.5576519,22.7304469 50.5577266,22.7303907 50.5580617,22.7313926 50.5583718,22.7314783 50.5585915,22.7317923 50.5586182,22.7318478 50.5587672,22.7316149 50.5589709,22.7319398 50.5591991,22.7323898 50.5593092,22.7326543 50.5595821,22.7329058 50.5595027,22.7333427 50.5596748,22.7290415 50.5618619,22.7279962 50.5623914,22.7249825 50.5639173,22.7230749 50.5649046,22.7147311 50.5583164,22.7148876 50.5580993,22.7151332 50.5579226,22.7151391 50.5579194,22.7153942 50.5577808,22.7155882 50.5576574,22.7162749 50.5575938,22.7162224 50.5573288,22.716222 50.5573113,22.7156174 50.5572338,22.7143012 50.5570852,22.714207 50.5570914,22.7140951 50.5570794,22.7140543 50.5571598,22.7139671 50.5571944,22.7135767 50.5571351,22.7103968 50.5567876,22.7095443 50.5567197,22.7080645 50.5565717,22.7075482 50.55651,22.7065184 50.5564099,22.7055365 50.5563136,22.7055122 50.5563081,22.7045789 50.5562408,22.7036649 50.5561959,22.7034873 50.5561948,22.7024523 50.5562006,22.7024147 50.5561999,22.7011433 50.5562359,22.7010236 50.5560153,22.7003642 50.5560821,22.6992614 50.5560734,22.6989752 50.5561083,22.6977345 50.5561311,22.6969793 50.5561879,22.6968091 50.5556629,22.6952031 50.5559969,22.6951577 50.5560067,22.6946478 50.5560985,22.6946391 50.5561005,22.6940869 50.5561887,22.693085 50.5562555,22.6921238 50.5570565,22.6911749 50.5572389,22.6911593 50.5572437,22.690365 50.5574166,22.6902981 50.5574328,22.6886384 50.5578107,22.6882194 50.5578929,22.6881707 50.5579008,22.6873495 50.5581091,22.6864704 50.5583267,22.6860439 50.5584353,22.6857378 50.558513,22.684495 50.5588376,22.6843443 50.5588775,22.6834074 50.559152,22.6810142 50.5598703,22.6808365 50.5599259,22.6809776 50.5579489,22.6811682 50.5559744,22.6808123 50.5543852,22.6807342 50.5538058,22.6802941 50.5516947,22.6801717 50.551048,22.6798046 50.549462,22.6794442 50.5479052,22.6794084 50.5477536,22.6792216 50.5469431,22.6789463 50.5456937,22.677917 50.5414964,22.6763828 50.5360066,22.6762461 50.5355499,22.6746723 50.5305109))"