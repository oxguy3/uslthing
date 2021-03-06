/**
 * my own version of opta-widgets
 */
 var Opta = {};
 Opta.bin = {};
 Opta._ = _;
 Opta.moment = moment;
 Opta.binary = {
       tsToDate: function(a, b) {
           var c = new Opta.moment.tz(1e3 * a, b || "Etc/UTC");
           return c.utc()
       },
       correctedTsToDate: function(a, b) {
           return Opta.binary.tsToDate(a, b || "Europe/London").utc()
       },
       readString: function(a) {
           for (var b, c = ""; b = a.getChar(), 0 !== b.charCodeAt(0);) c += b;
           return decodeURIComponent(escape(c))
       },
       getPlayerPosition: function(a) {
           switch (a) {
               case 1:
                   return "Goalkeeper";
               case 2:
                   return "Defender";
               case 3:
                   return "Midfielder";
               case 4:
                   return "Striker";
               case 5:
                   return "Substitute";
               default:
                   return a
           }
       },
       remap: {
           cricketCoverage: function(a) {
               switch (a) {
                   case 1:
                       return 1;
                   case 2:
                       return 4;
                   case 3:
                       return 3
               }
           },
           rugbyUnionCoverage: function(a) {
               switch (a) {
                   case 1:
                       return 2;
                   case 10:
                       return 5;
                   case 11:
                       return 1
               }
           },
           f1Period: function(a) {
               switch (a) {
                   case 0:
                       return 12;
                   case 1:
                       return 13;
                   case 2:
                       return 1;
                   case 3:
                       return 0;
                   case 4:
                       return 9
               }
           },
           f1EventPeriod: function(a) {
               switch (a) {
                   case 1:
                       return 2;
                   case 2:
                       return 4;
                   case 3:
                       return 6;
                   case 4:
                       return 8;
                   case 5:
                       return 10
               }
           },
           f1GroupName: function(a) {
               switch (a) {
                   case "A":
                       return 1;
                   case "B":
                       return 2;
                   case "C":
                       return 3;
                   case "D":
                       return 4;
                   case "E":
                       return 5;
                   case "F":
                       return 6;
                   case "G":
                       return 7;
                   case "H":
                       return 8;
                   case "I":
                       return 23;
                   case "J":
                       return 25;
                   case "K":
                       return 26;
                   case "L":
                       return 27;
                   case 1:
                       return 9;
                   case 2:
                       return 10;
                   case 3:
                       return 11;
                   case 4:
                       return 12;
                   case 5:
                       return 13;
                   case 6:
                       return 14;
                   case 7:
                       return 15;
                   case 8:
                       return 16;
                   case 9:
                       return 17;
                   case 10:
                       return 18;
                   case 11:
                       return 21;
                   case 12:
                       return 22
               }
               return a
           },
           f9EventPeriod: function(a) {
               switch (a) {
                   case 1:
                       return 2;
                   case 2:
                       return 4;
                   case 3:
                       return 6;
                   case 4:
                       return 8
               }
           },
           f13Period: function(a) {
               switch (a) {
                   case 1:
                       return 2;
                   case 2:
                       return 4;
                   case 3:
                       return 6;
                   case 4:
                       return 8
               }
               return a
           },
           f24Formation: function(a) {
               return ["", "", "442", "41212", "433", "451", "4411", "4141", "4231", "4321", "532", "541", "352", "343", "", "4222", "3511", "3421", "3412", "3142", "343d", "4132", "4240", "4312", "3241", "3331"][a]
           },
           f24EventPeriod: function(a) {
               switch (a) {
                   case 1:
                       return 2;
                   case 2:
                       return 4;
                   case 3:
                       return 6;
                   case 4:
                       return 8;
                   case 5:
                       return 10;
                   case 14:
                       return 9;
                   case 15:
                       return 1;
                   case 16:
                       return 1;
                   default:
                       return a
               }
           },
           f26Period: function(a) {
               switch (a) {
                   case 1:
                       return 1;
                   case 4:
                       return 2;
                   case 5:
                       return 3;
                   case 6:
                       return 4;
                   case 7:
                       return 5;
                   case 8:
                       return 6;
                   case 9:
                       return 7;
                   case 10:
                       return 8;
                   case 11:
                       return 9;
                   case 12:
                       return 10;
                   case 13:
                       return 11;
                   case 14:
                       return 12;
                   default:
                       return a
               }
           },
           f26EventPeriod: function(a) {
               switch (a) {
                   case 15:
                       return 1;
                   case 1:
                       return 2;
                   case 10:
                       return 3;
                   case 2:
                       return 4;
                   case 11:
                       return 4;
                   case 3:
                       return 6;
                   case 12:
                       return 7;
                   case 4:
                       return 8;
                   case 13:
                       return 8;
                   case 5:
                       return 10;
                   case 14:
                       return 9;
                   case 16:
                       return 1
               }
           },
           f26ResultType: function(a) {
               switch (a) {
                   case 1:
                       return "Abandoned";
                   case 2:
                       return "NormalResult";
                   case 5:
                       return "Postponed"
               }
               return !1
           },
           f1ResultType: function(a) {
               switch (a) {
                   case 9:
                       return "NormalResult";
                   case 12:
                       return "Abandoned";
                   case 13:
                       return "Postponed"
               }
               return !1
           },
           ru1Period: function(a) {
               switch (a) {
                   case "Result":
                       return 9;
                   case "Abandoned":
                       return 12;
                   case "Postponed":
                       return 13;
                   default:
                       return 1
               }
           },
           ru7Period: function(a) {
               switch (a.toLowerCase()) {
                   case "fixture":
                       return 1;
                   case "prematch":
                       return 1;
                   case "team in":
                       return 1;
                   case "firsthalf":
                   case "first half":
                       return 2;
                   case "halftime":
                       return 3;
                   case "second half":
                       return 4;
                   case "extra time first half":
                   case "first half extra":
                       return 6;
                   case "extra time half time":
                       return 7;
                   case "extra time second half":
                   case "second half extra":
                       return 8;
                   case "result":
                       return 9;
                   case "shoot out":
                       return 10;
                   case "abandoned":
                       return 12;
                   case "postponed":
                       return 13;
                   case "fulltime":
                       return 14;
                   case "sudden death":
                       return 16
               }
           },
           ru7EventPeriod: function(a) {
               switch (a) {
                   case "First Half":
                       return 2;
                   case "Second Half":
                       return 4;
                   case "Extra Time First Half":
                       return 6;
                   case "Extra Time Second Half":
                       return 8;
                   case "Post Game":
                       return 11;
                   case "Sudden Death":
                       return 16;
                   case "Kicking Competition":
                       return 10
               }
           },
           sdapiSoccerMatchPeriod: function(a) {
               switch (a) {
                   case 1:
                   case 2:
                   case 3:
                   case 4:
                   case 5:
                       return 2 * a;
                   case 14:
                       return 9;
                   case 16:
                       return 1
               }
           },
           sdapiSoccerPlayerPositionId: function(a) {
               switch (a) {
                   case "Forward":
                   case "Striker":
                   case "Attacker":
                       return 4;
                   case "Wing Back":
                   case "Defender":
                       return 2;
                   case "Goalkeeper":
                       return 1;
                   case "Defensive Midfielder":
                   case "Attacking Midfielder":
                   case "Midfielder":
                       return 3;
                   case "Substitute":
                       return 5;
                   default:
                       return a
               }
           },
           rugbyPlayerRegularPositionIds: function(b) {
               var c = ["Utility Back", "Full Back", "Wing", "Winger", "Centre", "Fly Half", "Scrum Half"],
                   d = ["No. 8", "Back Row", "Flanker", "Lock", "Prop", "Hooker"];
               return a._.contains(c, b) ? 1 : a._.contains(d, b) ? 2 : 5
           },
           rugbyPlayerPositionIds: function(a) {
               return a < 9 ? 2 : a < 16 ? 1 : 5
           },
           rugbyPlayerJerseyNames: function(a) {
               var b = {
                   1: "Prop",
                   2: "Hooker",
                   3: "Prop",
                   4: "Lock",
                   5: "Lock",
                   6: "Flanker",
                   7: "Flanker",
                   8: "No. 8",
                   9: "Scrum Half",
                   10: "Fly Half",
                   11: "Wing",
                   12: "Centre",
                   13: "Centre",
                   14: "Wing",
                   15: "Full Back"
               };
               return b[a] || "Substitute"
           },
           rugbyPlayerPositionRenames: function(a) {
               return "Winger" === a ? "Wing" : a
           },
           rugbyLeaguePeriodIds: function(a) {
               switch (a) {
                   case "First Half":
                       return 2;
                   case "Second Half":
                       return 4;
                   case "Extra Time First Half":
                       return 6;
                   case "Extra Time Second Half":
                       return 8;
                   case "Post Game":
                       return 11
               }
           },
           rugbyLeagueEventTypes: function(a) {
               var b = {
                   1: "Card",
                   3: "Conversion",
                   5: "Drop goal",
                   8: "Kick",
                   15: "Penalty Conceded",
                   17: "Play the ball",
                   27: "Try",
                   33: "Penalty Goal",
                   51: "Retained Kicks",
                   START: "Start",
                   CONV: "Conversion",
                   PENK: "Penalty",
                   DROPG: "Drop goal",
                   END: "End",
                   YELC: "Yellow",
                   REDC: "Red",
                   TRY: "Try"
               };
               return b[a]
           },
           rugbyLeagueEventTypesIds: function(a) {
               var b = {
                   "40/20": 46,
                   Card: 1,
                   Carry: 34,
                   "Clean Break": 35,
                   "Collection End": 30,
                   Comment: 40,
                   "Complete Set": 50,
                   Conversion: 3,
                   "Defender beaten": 4,
                   Deleted: 31,
                   "Disallowed Try": 47,
                   "Drop Goal": 5,
                   "Drop Out": 6,
                   End: 7,
                   Error: 29,
                   "Incomplete Set": 49,
                   Kick: 8,
                   "Missed Tackle": 38,
                   Offload: 12,
                   "On Report": 53,
                   Pass: 13,
                   "Penalty Conceded": 15,
                   "Penalty Goal": 33,
                   "Play the ball": 17,
                   Possession: 42,
                   "Repeat Set": 48,
                   "Retained Kicks": 51,
                   Scrum: 21,
                   "Squad In": 52,
                   Start: 22,
                   "Substitution off": 23,
                   "Substitution on": 24,
                   Tackle: 25,
                   "Team set up": 26,
                   "Time Update": 32,
                   Try: 27,
                   "Try assist": 28
               };
               return b[a]
           },
           rugbyLeaguePositionIds: function(a) {
               return a < 8 ? 1 : a < 14 ? 2 : 5
           },
           rugbyLeaguePositions: function(a) {
               return 1 === a ? "Back" : 2 === a ? "Forward" : "Substitute"
           }
       },
       getCoverage: function(a) {
           switch (a) {
               case 1:
                   return "FULL";
               case 2:
                   return "EVENTS_KEY";
               case 3:
                   return "EVENTS_LITE";
               case 4:
                   return "EVENTS_SCORING";
               case 5:
                   return "SCORES"
           }
       },
       getPeriod: function(a) {
           switch (a) {
               case 0:
                   return "Live";
               case 1:
                   return "PreMatch";
               case 2:
                   return "FirstHalf";
               case 3:
                   return "HalfTime";
               case 4:
                   return "SecondHalf";
               case 5:
                   return "ExtraTime";
               case 6:
                   return "ExtraFirstHalf";
               case 7:
                   return "ExtraHalfTime";
               case 8:
                   return "ExtraSecondHalf";
               case 9:
                   return "FullTime";
               case 10:
                   return "Shootout";
               case 11:
                   return "PostMatch";
               case 12:
                   return "Abandoned";
               case 13:
                   return "Postponed";
               case 14:
                   return "FullTime90";
               case 15:
                   return "FullTimePens";
               case 16:
                   return "SuddenDeath";
               case 17:
                   return "ExtraFullTime";
               case 18:
                   return "EndOfTheMatch";
               default:
                   return a
           }
       },
       getGroup: function(b) {
           var c = [0, 3991, 4001, 4011, 4021, 4031, 4041, 4051, 4061, 4121, 4131, 4141, 4151, 4161, 4171, 4181, 4191, 4201, 4211, 8441, 8451, 4221, 4231, 4071, 0, 4081, 4091, 4101, 8971, 8981, 8991, 9001, 9011, 9021, 9031, 9041, 9051, 9061, 9071, 9081, 9091, 9101, 9111, 9121, 9131, 9141, 9151, 9161, 9171, 9181];
           return c[b] ? a.Trans.t(c[b])[0] : 99 === b ? a.Trans.t(4111)[0] : b
       },
       getGroupKey: function(a) {
           switch (a) {
               case 1:
                   return "A";
               case 2:
                   return "B";
               case 3:
                   return "C";
               case 4:
                   return "D";
               case 5:
                   return "E";
               case 6:
                   return "F";
               case 7:
                   return "G";
               case 8:
                   return "H";
               case 9:
                   return "1";
               case 10:
                   return "2";
               case 11:
                   return "3";
               case 12:
                   return "4";
               case 13:
                   return "5";
               case 14:
                   return "6";
               case 15:
                   return "7";
               case 16:
                   return "8";
               case 17:
                   return "9";
               case 18:
                   return "10";
               case 19:
                   return "East";
               case 20:
                   return "West";
               case 21:
                   return "11";
               case 22:
                   return "12";
               case 23:
                   return "I";
               case 25:
                   return "J";
               case 26:
                   return "K";
               case 27:
                   return "L";
               case 28:
                   return "North";
               case 29:
                   return "South";
               case 30:
                   return "Red";
               case 31:
                   return "White";
               case 32:
                   return "Division One";
               case 33:
                   return "Division Two";
               case 34:
                   return "Northern Group A";
               case 35:
                   return "Northern Group B";
               case 36:
                   return "Northern Group C";
               case 37:
                   return "Northern Group D";
               case 38:
                   return "Northern Group E";
               case 39:
                   return "Northern Group F";
               case 40:
                   return "Northern Group G";
               case 41:
                   return "Northern Group H";
               case 42:
                   return "Southern Group A";
               case 43:
                   return "Southern Group B";
               case 44:
                   return "Southern Group C";
               case 45:
                   return "Southern Group D";
               case 46:
                   return "Southern Group E";
               case 47:
                   return "Southern Group F";
               case 48:
                   return "Southern Group G";
               case 49:
                   return "Southern Group H";
               case 99:
                   return "KO";
               default:
                   return a
           }
       },
       getCoachType: function(a) {
           switch (a) {
               case 1:
                   return "Manager";
               case 2:
                   return "Assistant Manager";
               default:
                   return a
           }
       },
       getCricketMatchType: function(a) {
           var b = [void 0, "Test", "ODI", "Twenty20", "Domestic Test", "Domestic One Day", "Domestic Twenty20", "Non Official Test", "Non Official One Day", "Non Official Twenty20"];
           return b[a]
       },
       getCricketMatchResult: function(a) {
           var b = ["No result", "Home win", "Draw", "Away win", "Tie", "Level scores draw", "Abandoned", "None"];
           return b[a]
       },
       cricket_batting_shot_types: ["", "No shot", "Drive", "Sweep", "Cut", "Slog-sweep", "Hook", "Upper cut", "Pull", "Glance", "Forward defensive", "Reverse sweep", "Backward defensive", "Worked", "Pushed", "Flick", "Steer", "Late cut", "Slog", "Fended", "Dropped", "Scoop", "Switch hit"],
       getCricketBattingShotType: function(a) {
           return this.cricket_batting_shot_types[a]
       }
   };
