var templates = `
#template name|requisites|category|list of changes
#Physical modification templates
accursed creature~accursed||1|$1~accursed $1;$2~$2+1
advanced creature~advanced||1|$1~advanced $1;$2~$2+1;$11~$11+4;$12~$12+4;$13~$13+4;$14~$14>2?$14+4:$14;$15~$15+4;$16~$16+4
degenerate creature~degenerate|$2>-4|1|$1~degenerate $1;$2~$2-1;$11~$11<5?1:$11-4;$12~$12<5?1:$12-4;$13~$13<5?1:$13-4;$14~$14<5?1:$14-4;$15~$15<5?1:$15-4;$16~$16<5?1:$16-4
fungoid creature|$6!3,10-12|1|$1~fungoid $1;$2~$2+1;$4~9;$6~11
ghoulish creature|$6=1,4,5,6,8;$14>2|1|$1~ghoulish $1;$4~$4=1,4,7?7:$4=0,2,5,8?8:9;$6~12;$11~$11+2;$16~$16+2
giant creature~giant|$5<8|1|$1~giant $1;$2~$2+1;$5~$5+1;$11~$11+4;$12~$12<3?1:$12-2;$13~$13+4
gnarled creature|$4!0-3;$6!1,3,9,11|1|$1~gnarled $1;$2~$2+1;$4~$4=4,7?7:$4=5-8?8:9;$11~$11+2;$12~$12<3?1:$12-2;$13~$13+2;$16~$16<5?1:$16-4
hive creature|$19=1|1|$1~hive-corrupted $1;$2~$2+1;$7~$7+46;$11~$11+2;$12~$12+2;$13~$13+2;$16~$16<7?1:$16-6;$17~0,14
lich creature|$4!1-3;$6=1,4-8;$7!11;$14>2|1|$1~lich $1;$2~$2+1;$4~$4=4,7?7:$4=5,8?8:9;$6~12;$14~$14+2;$15~$15+2;$16~$16+2
man-eating animal|$4!0-3;$6=2;$19=1|1|$1~man-eating $1;$2~$9<5?$2+1:$9>10?$2+3:$2+2;$4~9;$6~7;$13~$13+4;$14~$14+2;$15~$15+4;$16~$16+4
possessed creature|$6!2-3,9-13;$7!47,56;$14>2;$19=1|1|$1~possessed $1;$2~$2+1;$16~$16+4
primordial creature~primordial|$6=1-2,4,7,9,11,13;$7!47;$19=1|1|$1~primordial $1;$2~$9>4?$2+1:$2
promethean creature|$6!3,9;$7=47;$19=1|1|$1~promethean $1;$2~$2+1;$11~$11+4
prophecy-addled creature~prophacy-addled creature|$14>2;$19=1|1|$1~prophecy-addled $1;$2~$2+1
#ravener|$1<ancient ,wyrm ;$4=7-9;$8=20-26|1|$1~$1 ravener;$2~$2+2;$6~12;$11~$11+4;$13~0;$14~$14+4;$15~$15+4;$16~$16+6
shadowbound creature|$4!0-3;$6!3,9-12;$14>2;$19=1|1|$1~shadowbound $1;$2~$2+1;$13~$13+4
shield guardian~https://www.aonprd.com/MonsterFamilies.aspx?ItemName=Golem|$8=39|1|$1~$1 shield guardian;$2~$2+2;$21~1-2
vampiric creature|$4!0-3;$6!3-4,9-13;$7!47|1|$1~vampiric $1;$2~$2+1;$6~12;$11~$11+2;$12~$12+2;$16~$16+2
winter fey|$6=5;$7!7|1|$1~winter $1;$2~$2+1;$4~$4=1,4,7?7:$4=3,6,9?9:8;$7~$7+4;$11~$11+2;$13~$13+2;$18~1
winter-touched fey|$6=5;$7!7|1|$1~winter-touched $1;$4~$4=1,4,7?7:$4=3,6,9?9:8;$7~$7+4;$18~1
young creature~young|$2>-4;$5>0;$6!3,10,12|1|$1~young $1;$2~$2-1;$5~$5-1;$11~$11<5?1:$11-4;$12~$12+4;$13~$13<5?1:$13-4

#Planar templates
aerial creature~aerial|$6=1,2,7,13;$7!2,4-8,47;$19=1|2|$1~aerial $1;$2~$9>4?$2+1:$2;$7~$7+2;$7~$7-3;$19~8
aqueous creature~aqueous|$6=1,2,7,13;$7!2,4-8,47;$19=1|2|$1~aqueous $1;$2~$9>4?$2+1:$2;$7~$7+8;$7~$7-3;$19~11
boreal creature|$6=1,2,7,13;$7!4,7,47;$19=1|2|$1~boreal $1;$2~$2+1;$6~$6=2,13?7:$6;$7~$7+4;$10~$10+2;$12~$12+2;$18~1
celestial creature|$4!0,7-9;$6=2,7;$7!10;$19=1|2|$1~celestial $1;$2~$9>4?$2+1:$2;$4~$4=1,4?1:$4=2,5?2:3;$19~15,16,17
chthonic creature~chthonic|$6=1,2,7,13;$7!2,4-8,47;$19=1|2|$1~chthonic $1;$2~$9>4?$2+1:$2;$7~$7+5;$7~$7-3;$19~9
counterpoised creature~counterpoised|$4=5;$6=2,7;$7!9-12;$19=1|2|$1~counterpoised $1;$2~$9>4?$2+1:$2;$19~14
dark creature~dark|$6=1,2,7,13$7!2,4-8,47;$19=1|2|$1~dark $1;$2~$9>4?$2+1:$2;$19~2
entropic creature~entropic|$4!0,1,4,7;$6=2,7;$7!12;$19=1|2|$1~entropic $1;$2~$9>4?$2+1:$2;$4~$4=2,3?3:$4=5,6?6:9;$19~17,18,19
fey-touched creature|$6=2,7;$7!47;$19=1|2|$1~fey-touched $1;$2~$9>4?$2+1:$2
fiendish creature~fiendish|$4!0-3;$6=2,7;$7!11;$19=1|2|$1~fiendish $1;$2~$9>4?$2+1:$2;$4~$4=4,7?4:$4=5,8?8:9;$19~19,20,21
fiery creature|$6=1,2,7,13;$7!2,4-8,47;$19=1|2|$1~fiery $1;$2~$9>4?$2+1:$2;$7~$7+7;$7~$7-3;$19~10
hellbound creature|$4=7-9;$6=1,4,5,6,8;$14>2;$19=1|2|$1~hellbound $1;$2~$2+1;$11~$11+2;$16~$16+2
resolute creature~resolute|$4!0,3,6,9;$6=2,7;$7!9;$19=1|2|$1~resolute $1;$2~$9>4?$2+1:$2;$4~$4=1,2?1:$4=4,5?4:7;$19~15,21,22
shadow creature|$6=1,2,7,13;$7!47;$19=1|2|$1~shadow $1;$2~$2+1;$19~2
terror creature|$4!0-3;$6=2,7;$7!47;$19=1|2|$1~terror $1;$4~8

#Class templates
barbarian|$4=3,6,9;$14>2|3|$1~$1 barbarian;$2~$9>9?$2+3:$2+2;$11~$11+4
bard|$14>2;$9<5?$16>6:$9<9?$16>7:$9<13?$16>8:$9<17?$16>9:$9<21?$16>10:$16>11|3|$1~$1 bard;$2~$9>9?$2+2:$2+1;$16~$16+4
cleric|$14>2;$9<4?$15>6:$9<7?$15>7:$9<10?$15>8:$9<13?$15>9:$9<16?$15>10:$9<19?$15>11:$9<22?$15>12:$9<25?$15>13:$15>14|3|$1~$1 cleric;$2~$9<7?$2+1:$9>12?$2+3:$2+2;$15~$15+4
druid|$14>2;$9<4?$15>6:$9<7?$15>7:$9<10?$15>8:$9<13?$15>9:$9<16?$15>10:$9<19?$15>11:$9<22?$15>12:$9<25?$15>13:$15>14|3|$1~$1 druid;$2~$9<7?$2+1:$9>12?$2+3:$2+2;$15~$15+4
fighter|$14>2|3|$1~$1 fighter;$2~$9>9?$2+2:$2+1;$11~$11+4
monk|$4=1,4,7;$14>2;$15>5|3|$1~$1 monk;$2~$9>9?$2+3:$2+2;$12~$12+4;$15~$15+4
paladin|$4=1$16>5|3|$1~$1 paladin;$2~$9>9?$2+3:$2+2;$11~$11+4;$16~$16+4
ranger|$11>5;$14>2|3|$1~$1 melee ranger;$2~$9>9?$2+2:$2+1;$11~$11+4
ranger|$12>5;$14>2|3|$1~$1 archer ranger;$2~$9>9?$2+2:$2+1;$12~$12+4
rogue|$12>5;$14>2|3|$1~$1 rogue;$2~$9>9?$2+2:$2+1;$12~$12+4
sorcerer|$14>2;$9<5?$16>6:$9<8?$16>7:$9<11?$16>8:$9<14?$16>9:$9<17?$16>10:$9<20?$16>11:$9<23?$16>12:$9<26?$16>13:$16>14|3|$1~$1 sorcerer;$2~$9<8?$2+1:$9>13?$2+3:$2+2;$16~$16+4
wizard|$9<4?$14>6:$9<7?$14>7:$9<10?$14>8:$9<13?$14>9:$9<16?$14>10:$9<19?$14>11:$9<22?$14>12:$9<25?$14>13:$14>14|3|$1~$1 wizard;$2~$9<7?$2+1:$9>12?$2+3:$2+2;$14~$14+4

#Mythic templates
agile creature~https://www.aonprd.com/Rules.aspx?Name=Mythic%20Monster%20Advancement;Category=Mythic%20Monsters|$3=0|4|$1~agile $1;$2~$2+1;$3~$3+1
arcane creature~https://www.aonprd.com/Rules.aspx?Name=Mythic%20Monster%20Advancement;Category=Mythic%20Monsters|$3=0;$14>2;$14>9?$14>9:$16>9|4|$1~arcane $1;$2~$2+1;$3~$9>10?$3+2:$3+1
divine creature~https://www.aonprd.com/Rules.aspx?Name=Mythic%20Monster%20Advancement;Category=Mythic%20Monsters|$3=0;$14>2;$15>9?$15>9:$16>9|4|$1~divine $1;$2~$2+1;$3~$9>10?$3+2:$3+1
invincible creature~https://www.aonprd.com/Rules.aspx?Name=Mythic%20Monster%20Advancement;Category=Mythic%20Monsters|$3=0|4|$1~invincible $1;$2~$2+1;$3~$9>10?$3+2:$3+1
savage creature~https://www.aonprd.com/Rules.aspx?Name=Mythic%20Monster%20Advancement;Category=Mythic%20Monsters|$3=0|4|$1~savage $1;$2~$2+1;$3~$9>10?$3+2:$3+1
`;