const dataRoll = [ //Array for the roll command

    //Tools then Body
  
    [ //Tools
      [ // 4*
        "You rolled: Blade of Triumph, a 4* Sword", "You rolled: Youtou Masamura, a 4* Sword", "You rolled: Stinger, a 4* Sword", "You rolled: Ninja Scroll, a 4* Scroll", "You rolled: Infinity Scroll, a 4* Scroll", "You rolled: Tales of Hallows' Eve, a 4* Scroll", "You rolled: Tapestry of Transcience, a 4* Fan", "You rolled: The Fan Formerly Known As Uchiwa, a 4* Fan", "You rolled: Royal Fan, a 4* Fan", "You rolled: Forgotten Staff of Gabriel, a 4* Staff", "You rolled: Sheared Tail of the Best, a 4* Staff", "You rolled: Staff of Midas, a 4* Staff", "You rolled: Perdition's Flame, a 4* Shuriken", "You rolled: Star of Andromeda, a 4* Shuriken", "You rolled: Godhand, a 4* Shuriken", "You rolled: Heart-Shaped Magatama, a 4* accessory", "You rolled: Fluorite, a 4* accessory", "You rolled: Engraved Dragon Crystal, a 4* accessory", "You rolled: The I.R.S, a 4* accessory", "You rolled: The Tax Refund, a 4* accessory", "You rolled: The 100 Grand, a 4* accessory", "You rolled: The Payday, a 4* accessory", "You rolled: Bunny Ears and Tail, a 4* accessory", "You rolled: Cat Ears and Tail, a 4* accessory", "You rolled: Heart Pendant, a 4* accessory", "You rolled: Milk Chocolate Bracelet, a 4* accessory", "You rolled: Strawberry-Chocolate Bracelet, a 4* accessory", "You rolled: Confessions of a Teenage Otaku, a 4* accessory", "You rolled: Thor's Get-A-Grip Wrench, a 4* accessory", "You rolled: Casino Dice, a 4* accessory"
      ],
      [ // 3*
        "You rolled: Susanoo's Sword, a 3* Sword", "You rolled: Bloddthirsty Sword, a 3* Sword", "You rolled: Youtou Shigure, a 3* Sword",  "You rolled: Harbinger of Blight, a 3* Sword", "You rolled: Blade of the Dancing Sakura, a 3* Sword", "You rolled: Ichigo Parchement, a 3* Scroll", "You rolled: Totally Legit Manifesto, a 3* Scroll", "You rolled: Dragon Scroll: Gaiden, a 3* Scroll", "You rolled: Dragon Scroll: Memoirs, a 3* Scroll", "You rolled: Casanova Scroll, a 3* Scroll", "You rolled: Wind of Fantasia, a 3* Fan", "You rolled: Wing of Yatagarasu, a 3* Fan", "You rolled: Autumn's Cool Breeze, a 3* Fan", "You rolled: Leprechaun's Fan, a 3* Fan", "You rolled: Apothecary's Fan, a 3* Fan", "You rolled: The Jester's Smile, a 3* Staff", "You rolled: Millenium in Bloom, a 3* Staff", "You rolled: Steel Staff Type-0, a 3* Staff", "You rolled: The Polyglot's Gift, a 3* Staff", "You rolled: A Somber Goodbye, a 3* Staff", "You rolled: Zantetsu Shuriken, a 3* Shuriken", "You rolled: R/C Shuriken, a 3* Shuriken", "You rolled: Flower Power!, a 3* Shuriken", "You rolled: Crescent Moon's Blessing, a 3* Shuriken", "You rolled: Remnant of the Heavens, a 3* Shuriken", "You rolled: Traditional Bookmark, a 3* Accessory", "You rolled: Gold Bookmark, a 3* Accessory", "You rolled: Bamboo Water Bottle, a 3* Accessory", "You rolled: Obsidian, a 3* Accessory", "You rolled: Gold Ofuda, a 3* Accessory", "You rolled: Red Ofuda, a 3* Accessory", "You rolled: Black Kunai, a 3* Accessory", "You rolled: Pink Kunai, a 3* Accessory", "You rolled: Zeni, a 3* Accessory", "You rolled: Caltrops, a 3* Accessory", "You rolled: Gourmet Rations, a 3* Accessory", "You rolled: Fossilized Rations, a 3* Accessory", "You rolled: Inrou, a 3* Accessory", "You rolled: Shinobi Fire Bomb, a 3* Accessory", "You rolled: Hamaya, a 3* Accessory", "You rolled: Taruto's Headband, a 3* Accessory", "You rolled: Calamity's Bane, a 3* Accessory", "You rolled: Ema, a 3* Accessory", "You rolled: Shikigami, a 3* Accessory", "You rolled: Tears of the Moon, a 3* Accessory", "You rolled: Comet Hammer, a 3* Accessory", "You rolled: Cookbook for Dummies, a 3* Accessory", "You rolled: DNA Container, a 3* Accessory", "You rolled: Yamabuki Fanfic, a 3* Accessory", "You rolled: Misunderstood Kitchen Knife, a 3* Accessory"
      ],
      [ // 2*
        "You rolled: Tainted Sword, a 2* Sword", "You rolled: Sun God's Butter Knife, a 2* Sword", "You rolled: Sword of light, a 2* Sword", "You rolled: Sword of Cavities, a 2* Sword", "You rolled: Festive Scimitar, a 2* Sword", "You rolled: Clashing Supernoveas, a 2* Sword", "You rolled: Wooden Sword, a 2* Sword", "You rolled: Kiku-juumonji, a 2* Sword", "You rolled: Iga Short Sword, a 2* Sword", "You rolled: The Nosebleed Sword, a 2* Sword", "You rolled: Ninjutsu Anthology Vol. III, a 2* Scroll", "You rolled: Scroll of Restraint, a 2* Scroll", "You rolled: Sneaking Scroll, a 2* Scroll", "You rolled: Suspicious-Looking Scroll, a 2* Scroll", "You rolled: Treasure Map, a 2* Scroll", "You rolled: Sushi Scroll, a 2* Scroll", "You rolled: Eyes Eyes Baby, a 2* Scroll", "You rolled: Chrono's Diary, a 2* Scroll", "You rolled: Dirty Fanfiction, a 2* Scroll", "You rolled: Twilight Manuscript, a 2* Scroll", "You rolled: Winter Butterfly, a 2* Fan", "You rolled: Light of the Heavens, a 2* Fan", "You rolled: The Peony, a 2* Fan", "You rolled: Winter's First Snow, a 2* Fan", "You rolled: Sakura Storm, a 2* Fan", "You rolled: Sol's Final Hour, a 2* Fan", "You rolled: A Fan Made out of Money, a 2* Fan", "You rolled: Queen's Fan, a 2* Fan", "You rolled: Autumns Maple Leaf, a 2* Fan", "You rolled: Symbol of Spring, a 2* Fan", "You rolled: One-Winged Staff, a 2* Staff", "You rolled: Corrupted Angel's Staff, a 2* Staff", "You rolled: Angel's Wand, a 2* Staff", "You rolled: Toy Wand, a 2* Staff", "You rolled: Swan's Ballet, a 2* Staff", "You rolled: Bad Staff, a 2* Staff", "You rolled: Staff of Life, a 2* Staff", "You rolled: Zodiac Staff, a 2* Staff", "You rolled: Amaterasu Staff, a 2* Staff", "You rolled: Bubble Wand, a 2* Staff", "You rolled: Shadow of the Moon, a 2* Shuriken", "You rolled: Pine Jet Shuriken, a 2* Shuriken", "You rolled: Eight-Point Shuriken, a 2* Shuriken", "You rolled: Baseball, a 2* Shuriken", "You rolled: Manji Shuriken, a 2* Shuriken", "You rolled: Standard Shuriken, a 2* Shuriken", "You rolled: Three-Point Shuriken, a 2* Shuriken", "You rolled: Party Trick, a 2* Shuriken", "You rolled: Overpriced Shuriken, a 2* Shuriken", "You rolled: ROFL Copter, a 2* Shuriken", "You rolled: Blue Good-Luck Charm, a 2* Accessory", "You rolled: Yellow Good-Luck Charm, a 2* Accessory", "You rolled: Survival Kit, a 2* Accessory", "You rolled: Shamisen, a 2* Accessory", "You rolled: Peach Explosion, a 2* Accessory", "You rolled: Carassius Auratus, a 2* Accessory", "You rolled: Pimplicis Explodius, a 2* Accessory", "You rolled: Jiangshi Protection Seal, a 2* Accessory", "You rolled: Hopping Dead All-Access Pass, a 2* Accessory", "You rolled: Masquerade Eye Mask, a 2* Accessory", "You rolled: Stone Cold Pendant, a 2* Accessory", "You rolled: DIY Pendant Kit, a 2* Accessory", "You rolled: The Raging Bull Mk. II, a 2* Accessory", "You rolled: Smokey's 75th Birthday Gift, a 2* Accessory", "You rolled: Uncle P. Bags' Missing Monocle, a 2* Accessory", "You rolled: Silver Pocket Watch, a 2* Accessory", "You rolled: Gold Pocket Watch, a 2* Accessory", "You rolled: Ice Queen's Chime, a 2* Accessory", "You rolled: Soothsayer's Quill, a 2* Accessory", "You rolled: *Odeur de Tiger*, a 2* Accessory", "You rolled: Equestrian Crop, a 2* Accessory", "You rolled: Opulent Hair Accessory, a 2* Accessory", "You rolled: Purple Passion, a 2* Accessory", "You rolled: Winter Wonder, a 2* Accessory", "You rolled: Friendship Bracelet for Men, a 2* Accessory", "You rolled: Friendship Bracelet for Women, a 2* Accessory", "You rolled: Swanwhite Ballet, a 2* Accessory", "You rolled: Off-Brand Cat Nip, a 2* Accessory", "You rolled: Brand-Name Cat Nip, a 2* Accessory", "You rolled: Flour-Leaf Clover, a 2* Accessory", "You rolled: Hippocratic Oath, a 2* Accessory", "You rolled: White Kitsune Mask, a 2* Accessory", "You rolled: Black Kitsune Mask, a 2* Accessory", "You rolled: Purple Charm, a 2* Accessory", "You rolled: Red Charm, a 2* Accessory", "You rolled: Blue Charm, a 2* Accessory", "You rolled: Black Handcuffs, a 2* Accessory", "You rolled: Elegant Demon's Bane, a 2* Accessory", "You rolled: Demon's Bane, a 2* Accessory", "You rolled: Melancholy's Elegy, a 2* Accessory", "You rolled: Diamond Engagement Shield, a 2* Accessory", "You rolled: Magatama Fish Tank, a 2* Accessory", "You rolled: Champion's Belt, a 2* Accessory", "You rolled: Slime in a Bottle, a 2* Accessory", "You rolled: Mizaki School Handbook, a 2* Accessory", "You rolled: Cristal Clear Persuasion, a 2* Accessory", "You rolled: Sakura's Hoe, a 2* Accessory", "You rolled: *Mature* by Iori, a 2* Accessory", "You rolled: Leather's Painful Kiss, a 2* Accessory", "You rolled: Doctor's Syringe, a 2* Accessory"
      ]
    ],
  
    [ //Body
      [ // 4*
        "You rolled: Akari Sexy Armor, a 4* Attacker and Spirit body", "You rolled: Enju Sexy Armor, a 4* Mage and Technique body", "You rolled: Ricka Sexy Armor, a 4* Ranger and Illusion body", "You rolled: Myu Sexy Armor, a 4* Mage and Vitality body", "You rolled: Tengge Sexy Armor, a 4* Tank and Technique body", "You rolled: Yamabuki Sexy Armor, a 4* Healer and Spirit body", "You rolled: Lily Sexy Armor, a 4* Ranger and Spirit body", "You rolled: Cy Sexy Armor, a 4* Attacker and Vitality body", "You rolled: Nanao Sexy Armor, a 4* Mage and Truth body", "You rolled: Kikuko Sexy Armor, a 4* Attacker and Truth body", "You rolled: Oka Sexy Armor, a 4* Attacker and Illusion body", "You rolled: Yozuki Sexy Armor, a 4* Tank and Truth body", "You rolled: Waka Sexy Armor, a 4* Ranger and Technique body", "You rolled: Iori Sexy Armor, a 4* Healer and Vitality body", "You rolled: Ran Sexy Armor, a 4* Mage and Illusion body", "You rolled: Spy suit Akari, a 4* Attacker and Technique body", "You rolled: Halloween hijinks Tengge, a 4* Ranger and Vitality body", "You rolled: New year's dress Lily, a 4* Healer and Truth body", "You rolled: Gothic dress Ricka, a 4* Mage and Truth body", "You rolled: Animal get-up Tengge, a 4* Tank and Illusion body", "You rolled: Animal get-up Kikuko, a 4* Attacker and Spirit body", "You rolled: Moon viewing mayhem Yamabuki, a 4* Tank and Illusion body", "You rolled: Mizaki's ace attorney Enju, a 4* Attacker and Truth body", "You rolled: Christmas angel Myu, a 4* Mage and Truth body", "You rolled: Christmas angel Enju, a 4* Healer and Illusion body", "You rolled: New year's dress Oka, a 4* Attacker and Spirit body", "You rolled: Valentine dress Ran, a 4* Mage and Vitality body", "You rolled: Stylish head chef Yozuki, a 4* Healer and Spirit body", "You rolled: Hunter outfit Akari, a 4* Tank and Vitality body", "You rolled: Panda dress Enju, a 4* Mage and Spirit body", "You rolled: All Grown up Cy, a 4* Attacker and Truth body", "You rolled: All Grown up Ricka, a 4* Healer and Technique body", "You rolled: Sexy ninja garb Yozuki, a 4* Attacker and Vitality body", "You rolled: Valentine dress Waka, a 4* Attacker and Spirit body", "You rolled: Panda dress Iori, a 4* Tank and Truth body", "You rolled: Sexy ninja garb Enju, a 4* Mage and Illusion body"
      ],
      [ // 3*
        "You rolled: Spy suit Lily, a 3* Mage and Spirit body", "You rolled: Animal get-up Lily, a 3* Ranger and Vitality body", "You rolled: Big bad wolf Iori Outfit, a 3* Ranger and Illusion body", "You rolled: Stylish head chef Myu, a 3* Attacker and Illusion body", "You rolled: Halloween hijinks Nanao, a 3* Mage and Technique body", "You rolled: Catwalk star Ran, a 3* Ranger and Spirit body", "You rolled: Moon viewing mayhem Yozuki, a 3* Mage and Technique body", "You rolled: Christmas angel Cy, a 3* Attacker and Spirit body", "You rolled: All Grown up Kikuko, a 3* Ranger and Truth body", "You rolled: Moon viewing mayhem Enju, a 3* Attacker and Spirit body", "You rolled: Sexy weathergirl Tengge, a 3* Healer and Illusion body", "You rolled: All Grown up Akari, a 3* Mage and Illusion body",      "You rolled: Animal get-up Akari, a 3* Healer and Illusion body", "You rolled: Valentine dress Enju, a 3* Tank and Technique body", "You rolled: Panda dress Ricka, a 3* Ranger and Vitality body", "You rolled: Stylish head chef Ricka, a 3* Tank and Spirit body", "You rolled: Dream-dress up Myu, a 3* Tank and Technique body", "You rolled: New year's dress Tengge, a 3* Mage and Vitality body", "You rolled: Valentine dress Yamabuki, a 3* Healer and Technique body", "You rolled: Playtime fun Cy, a 3* Mage and Vitality body", "You rolled: New year's dress Nanao, a 3* Ranger and Spirit body", "You rolled: Beautiful bunny Nanao, a 3* Attacker and Vitality body", "You rolled: Halloween hijinks Kikuko, a 3* Healer and Truth body", "You rolled: Stylish head chef Oka, a 3* Ranger and Spirit body", "You rolled: Spy suit Oka, a 3* Tank and Vitality body", "You rolled: Little red riding Oka, a 3* Healer and Technique body", "You rolled: Dreamy dress-up Oka, a 3* Attacker and Truth body", "You rolled: Panda dress Yozuki, a 3* Attacker and Truth body", "You rolled: Gotich dress Waka, a 3* Tank and Illusion body", "You rolled: Gothic dress Iori, a 3* Healer and Technique body", "You rolled: Christmas dress Ran, a 3* Tank and Truth body", "You rolled: Akari Roaring Fist Outfit, a 3* Attacker and Truth body", "You rolled: Enju Thaumaturge Outfit, a 3* Mage and Vitality body", "You rolled: Ricka Outfit of Justice, a 3* Ranger and Spirit body", "You rolled: Myu Beast Outfit, a 3* Healer and Illusion body", "You rolled: Tengge Get Down and Boogie Outfit, a 3* Attacker and Vitality body", "You rolled: Yamabuki Lady Luck Outfit, a 3* Ranger and Vitality body", "You rolled: Lily One With the Sky Outfit, a 3* Tank and Illusion body", "You rolled: Cy Deadeye Outfit, a 3* Ranger and Illusion body", "You rolled: Nanao Healing Touch Outfit, a 3* Healer and Technique body", "You rolled: Kikuko Outfit of the Worthy, a 3* Tank and Technique body", "You rolled: Oka Servant of the Gods Outfit, a 3* Healer and Truth body", "You rolled: Yozuki Bloodlust Outfit, a 3* Attacker and Spirit body", "You rolled: Waka Outfit of the Dead, a 3* Mage and Spirit body", "You rolled: Ran Jack of all Trades, a 3* Mage and Technique body", "You rolled: Iori Watcher of the Stars Outfits, a 3* Mage and Truth body", "You rolled: Akari Dress, a 3* Healer and Vitality body", "You rolled: Enju Dress, a 3* Ranger and Truth body", "You rolled: Ricka Dress, a 3* Mage and Vitality body", "You rolled: Myu Dress, a 3* Ranger and Spirit body", "You rolled: Tengge Dress, a 3* Ranger and Truth body", "You rolled: Yamabuki Dress, a 3* Tank and Illusion body", "You rolled: Lily Dress, a 3* Ranger and Technique body", "You rolled: Cy Dress, a 3* Attacker and Technique body", "You rolled: Nanao Dress, a 3* Mage and Illusion body", "You rolled: Kikuko Dress, a 3* Attacker and Illusion body", "You rolled: Oka Dress, a 3* Tank and Technique body", "You rolled: Yozuki Dress, a 3* Attacker and Vitality body", "You rolled: Waka Dress, a 3* Ranger and Truth body", "You rolled: Iori Dress, a 3* Healer and Spirit body", "You rolled: Ran Dress, a 3* Healer and Spirit body"
      ],
      [ // 2*
        "You rolled: Akari Modern Kimono, a 2* Healer and Illusion body", "You rolled: Enju Modern Kimono, a 2* Healer and Technique body", "You rolled: Ricka Modern Kimono, a 2* Tank and Technique body", "You rolled: Myu Modern Kimono, a 2* Ranger and Vitality body", "You rolled: Tengge Modern Kimono, a 2* Attacker and Truth body", "You rolled: Yamabuki Modern Kimono, a 2* Ranger and Spirit body", "You rolled: Lily Modern Kimono, a 2* Attacker and Vitality body", "You rolled: Cy Modern Kimono, a 2* Tank and Illusion body", "You rolled: Nanao Modern Kimono, a 2* Tank and Truth body", "You rolled: Kikuko Modern Kimono, a 2* Tank and Vitality body", "You rolled: Oka Modern Kimono, a 2* Mage and Technique body", "You rolled: Yozuki Modern Kimono, a 2* Healer and Spirit body", "You rolled: Waka Modern Kimono, a 2* Healer and Truth body", "You rolled: Ran Modern Kimono, a 2* Ranger and Truth body", "You rolled: Iori Modern Kimono, a 2* Mage and Spirit body", "You rolled: Akari Suit, a 2* Ranger and Technique body", "You rolled: Enju Suit, a 2* Ranger and Illusion body", "You rolled: Ricka Suit, a 2* Attacker and Illusion body", "You rolled: Myu Suit, a 2* Healer and Spirit body", "You rolled: Tengge Suit, a 2* Mage and Illusion body", "You rolled: Yamabuki Suit, a 2* Tank and Vitality body", "You rolled: Lily Suit, a 2* Tank and Spirit body", "You rolled: Cy Suit, a 2* Healer and Truth body", "You rolled: Nanao Suit, a 2* Attacker and Technique body", "You rolled: Kikuko Suit, a 2* Mage and Truth body", "You rolled: Oka Suit, a 2* Healer and Vitality body", "You rolled: Yozuki Suit, a 2* Tank and Technique body", "You rolled: Waka Suit, a 2* Ranger and Spirit body", "You rolled: Ran Suit, a 2* Mage and Vitality body", "You rolled: Iori Suit, a 2* Attacker and Truth body", "You rolled: Akari Yukata, a 2* Attacker and Vitality body", "You rolled: Enju Yukata, a 2* Mage and Spirit body", "You rolled: Ricka Yukata, a 2* Mage and Truth body", "You rolled: Myu Yukata, a 2* Mage and Technique body", "You rolled: Tengge Yukata, a 2* Tank and Spirit body", "You rolled: Yamabuki Yukata, a 2* Attacker and Technique body", "You rolled: Lily Yukata, a 2* Ranger and Truth body", "You rolled: Cy Yukata, a 2* Ranger and Vitality body", "You rolled: Nanao Yukata, a 2* Healer and Vitality body", "You rolled: Kikuko Yukata, a 2* Attacker and Spirit body", "You rolled: Oka Yukata, a 2* Tank and Illusion body", "You rolled: Yozuki Yukata, a 2* Attacker and Illusion body", "You rolled: Waka Yukata, a 2* Mage and Illusion body", "You rolled: Ran Yukata, a 2* Healer and Technique body", "You rolled: Iori Yukata, a 2* Ranger and Illusion body", "You rolled: Akari Spring Outfit, a 2* tank and Spirit body", "You rolled: Enju Spring Outfit, a 2* Attacker and Truth body", "You rolled: Ricka Spring Outfit, a 2* Healer and Vitality body", "You rolled: Myu Spring Outfit, a 2* Tank and Illusion body", "You rolled: Tengge Spring Outfit, a 2* Ranger and Technique body", "You rolled: Yamabuki Spring Outfit, a 2* Healer and Illusion body", "You rolled: Lily Spring Outfit, a 2* Mage and Technique body", "You rolled: Cy Spring Outfit, a 2* Attacker and Spirit body", "You rolled: Nanao Spring Outfit, a 2* Mage and Illusion body", "You rolled: Kikuko Spring Outfit, a 2* Ranger and Technique body", "You rolled: Oka Spring Outfit, a 2* Ranger and Truth body", "You rolled: Yozuki Spring Outfit, a 2* Mage and Truth body", "You rolled: Waka Spring Outfit, a 2* Attacker and Vitality body", "You rolled: Ran Spring Outfit, a 2* Tank and Spirit body", "You rolled: Iori Spring Outfit, a 2* Healer and Vitality body", "You rolled: Akari Kimono, a 2* Mage and Truth body", "You rolled: Enju Kimono, a 2* Tank and Vitality body", "You rolled: Ricka Kimono, a 2* Ranger and Spirit body", "You rolled: Myu Kimono, a 2* Attacker and Truth body", "You rolled: Tengge Kimono, a 2* Healer and Vitality body", "You rolled: Yamabuki Kimono, a 2* Mage and Truth body", "You rolled: Lily Kimono, a 2* Healer and Illusion body", "You rolled: Cy Kimono, a 2* Mage and Technique body", "You rolled: Nanao Kimono, a 2* Ranger and Spirit body", "You rolled: Kikuko Kimono, a 2* Healer and Illusion body", "You rolled: Oka Kimono, a 2* Attacker and Spirit body", "You rolled: Yozuki Kimono, a 2* Ranger and Vitality body", "You rolled: Waka Kimono, a 2* Tank and Technique body", "You rolled: Iori Kimono, a 2* Tank and Technique body", "You rolled: Ran Kimono, a 2* Attacker and Illusion body"
      ]
    ]
  
  ]