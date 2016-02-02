/*global angular */
(function () {
    'use strict';
    var mockApp = angular.module('mockApp', ['angular.filter'])
    
    mockApp.controller('MockController', ['$scope', function($scope) {
        $scope.roster = [
            {   first: "Thomas",
                last: "Dal Pino",
                image: "assets/img/headshots/blank.png",
                description: ""},
            
            {   first: "Katherine",
                last: "Beare",
                image: "assets/img/headshots/blank.png",
                description: ""},
            
            {   first: "Drew",
                last: "Betts",
                image: "assets/img/headshots/blank.png",
                description: ""},
            
            {   first: "David",
                last: "Brunk",
                image: "assets/img/headshots/blank.png",
                description: "David is a junior from Hood River, OR, studying Economics and History. He studied in Cleveland, OH at Case Western Reserve University for the past two years, where he was a member of the varsity wrestling team. He has no experience with mock trial or speech and debate. In Eugene, he has joined the Mock Trial Team and began a historical research project. David hopes after college to pursue a graduate degree, attend law school, and get a dog."},
            
            {   first: "Keith",
                last: "Bunting",
                image: "assets/img/headshots/keith.jpg",
                description: ""},
            
            {   first: "Andrew",
                last: "Dizon",
                image: "assets/img/headshots/blank.png",
                description: ""},
            
            {   first: "Ally",
                last: "Jansky",
                image: "assets/img/headshots/blank.png",
                description: "Ally is a freshman from Portland, OR, pursuing a major in Political Science while studying within the Clark Honors College. She competed in speech and debate during her senior year in high school. She also competed in mock trial cases multiple times throughout high school. Ally has enjoyed an illustrious acting career, meaning she was in two student-written student- directed  plays during the course of her junior and senior years. In her free time, she likes to read the case over and over until her eyes disintegrate or she runs out of coffee."},
            
            {   first: "Sadie",
                last: "Kavalier",
                image: "assets/img/headshots/blank.png",
                description: ""},
            
            {   first: "Sabine",
                last: "Slome",
                image: "assets/img/headshots/blank.png",
                description: ""},
            
            {   first: "Ian",
                last: "Alpenia",
                image: "assets/img/headshots/ian.jpg",
                description: "Ian is a junior from Ashland, OR studying Sociology. He is new to UOMT but loves everything about it. Ian is aspiring to become an attorney, following in his uncle’s footsteps. He also loves all sports but mostly football, baseball and soccer. His favorite sports teams are the Los Angeles Dodgers and Chelsea Football Club."},
            
            {   first: "Clarice",
                last: "Beasley",
                image: "assets/img/headshots/clarice.jpg",
                description: "Clarice is a freshman from Portland, OR, majoring in International Business. Clairce was a participant in mock trial for 3 years at her high school. She enjoys Thai food, sushi, hip-hop music, and poetry. She has a special love for coconut water as well. She loves long walks on the beach and rom-coms. She hopes that competing for UOMT will bring her more experience and a new appreciation for the law."},
            
            {   first: "Caroline",
                last: "Doss",
                image: "assets/img/headshots/caroline.jpg",
                description: "Caroline is a freshman from Central Point, OR. She is studying within the Clark Honors College and is currently pursuing a double major is Sociology and Romance Languages. Caroline had no prior mock trial experience before this year, but has been acting and performing for eight years. Competing for the University of Oregon at the Frohnmayer Invitational, Caroline received 16 ranks and an Outstanding Witness award."},
            
            {   first: "Melissa",
                last: "Liu",
                image: "assets/img/headshots/blank.png",
                description: "Melissa Liu is a freshman at the University of Oregon. She is a double major in French and Economics. A graduate of Lake Oswego High School, she captained her school’s mock trial team and was apart of the school’s state winning Speech & Debate team in 2014. Melissa has also sprained her ankle playing intramural coed football, never tasted a pumpkin spice latte, and is proud to be a duck."},
            
            {   first: "Mia",
                last: "Bacher",
                image: "assets/img/headshots/blank.png",
                description: ""},
            
            {   first: "William",
                last: "Leo",
                image: "assets/img/headshots/blank.png",
                description: "William is a freshman from Portland, OR studying International Relations and Philosophy. This is William's first year participating in mock trial, following with a deep interest about the law.  During high school, he participated in Speech and Debate, Constitution Team, and Student Government. William has a deep interest in governance as well as its implications for the lives of average citizens and has worked with Portland area lawyers as a legal researcher. In addition, last summer he worked as an administrative assistant for the 9th Circuit Court at Pioneer Courthouse in Portland."},
            
             {  first: "Gunnar",
                last: "Olson",
                image: "assets/img/headshots/blank.png",
                description: ""},
            
             {  first: "Morgan",
                last: "Terhune",
                image: "assets/img/headshots/blank.png",
                description: "Morgan Terhune is a freshman from Tualatin, OR, currently majoring in Philosophy in the Clarks Honors College. A newcomer to Mock Trial, this is her first year competing with the UOMT. In high school, Morgan was a member of her speech and debate team, participating in Lincoln-Douglas debate, and a member of Tualatin’s Youth Advisory Council.  Morgan has plenty of experience working with the government, having volunteered with local and state levels on many occasions. She looks forward to gaining experience with the UOMT this year."},
            
             {  first: "Areeb",
                last: "Alam",
                image: "assets/img/headshots/areeb.jpg",
                description: "Areeb is a freshman from Beaverton, OR, majoring in Economics. He was team captain of Mock Trial at Sunset High School for 4 years. His final year in high school mock trial, as president, he lead his team to the first state championship in 4 years and placed 6th at state, winning two MVP awards in the process."},
            
             {  first: "Olivia",
                last: "Courogen",
                image: "assets/img/headshots/olivia.jpg",
                description: "Olivia is a sophomore from Portland, OR. Olivia graduated from Jakarta International School in Jakarta, Indonesia. She is currently in pursuit of a degree in International Business and Legal Studies. A newcomer to mock trial, Olivia is in her first year on the UOMT team but is already hooked. Olivia enjoys being involved in leadership roles and loves being involved in clubs on campus, as well as in her sorority. She hopes to pursue a dual JD/MBA degree and go on to practice business law. In her free time, Olivia loves to watch Scandal, run and spend time outdoors, and travel around the world."},
            
            {   first: "MJ",
                last: "Flores",
                image: "assets/img/headshots/mj.jpg",
                description: "MJ is a Junior from Phoenix, Arizona, pursuing a major in Political Science  and a major in Economics, with a minor in History. He is best known for his ability to portray witnesses of Latin descent. He is a fearsome adversary in the courtroom, as those who cross him can say with certainty. He wishes to go on to law school, and continue pursuing a legal career as a cooperate attorney."},
            
            {   first: "Aviva",
                last: "Kaye-Diamond",
                image: "assets/img/headshots/aviva.jpg",
                description: "Aviva Kaye-Diamond is a freshman from Portland, Oregon. She is a Clark Honors Student pursuing a political science major with a minor in Spanish. This will be her fourth year of Mock Trial. She participated on her high school team for three years, and has experience portraying witnesses as well as attorneys (however she has not yet aquired an accent). Aviva wants to become a lawyer, judge, legislator, local government official, or pretty much anything government related. She currently works for the University Senate."},
            
            {   first: "Sofia",
                last: "Penrose",
                image: "assets/img/headshots/sofia.jpg",
                description: ""},
            
            {   first: "Kerissa",
                last: "Sheley",
                image: "assets/img/headshots/blank.png",
                description: "Kerissa is a freshman from Eugene, OR, pursuing a double major in Business and Humanities while studying within the Clark Honors College. During high school she was on the Varsity Dance Team all four years, participated in the Mr. Irish Pageant to raise money for the Children’s Miracle Network, was the Publicity Representative for the National Honors Society, the Senior Class Vice President, and Secretary for Key Club, which is a community service organization affiliated with Kiwanis international. Kerissa is new to Mock Trial but is excited to learn something new."},
            
            {   first: "Sonya",
                last: "Swanson",
                image: "assets/img/headshots/sonya.jpg",
                description: "Sonya is a freshman from Lake Oswego, OR, pursuing a major in Political Science and a minor in History while studying within the Clark Honors College. Although she has no prior mock trial/speech and debate experience, she has immersed herself in crime television and feels well equipped to tackle collegiate mock trial. Her biggest goal this year is to acquire a more holistic understanding of the courts and legal system. Sonya was drawn to mock trial because she loves looking at issues from all different perspectives to find creative solutions."},

            {   first: "Phillip",
                last: "Kriegel",
                image: "assets/img/headshots/phillip.jpg",
                description: "Phillip is a senior from Beaverton, OR, pursuing a major in Computer and Information Science and a major in Applied Mathematics, with a minor in Spanish. He is also a member of the Clark Honors College. Phillip has been a part of the team for 3 years now, and is best known for his ability to portray witnesses of Slavic descent. Known by opposing competitors as the \"Volk\", he is a fearsome adversary in the courtroom."},

            {   first: "Greg",
                last: "Mina",
                image: "assets/img/headshots/greg.jpg",
                description: "Greg is a senior from Colorado Springs, CO, pursuing a double major in Political Science and Spanish while studying within the Clark Honors College. Greg is entering his fourth year with UOMT, and third as President. In high school, Greg earned two outstanding attorney awards while leading his team to two state championship rounds, and garnered the most individual ranks in the state in 2011. Competing for UOMT, Greg served as captain of the first ORCS team in school history, and was the first UOMT competitor to earn all 20 possible individual ranks at a tournament."},

            {   first: "Devon",
                last: "Staton-Ralston",
                image: "assets/img/headshots/devon.jpg",
                description: ""},

            {   first: "Charles",
                last: "Steenkolk",
                image: "assets/img/headshots/charles.jpg",
                description: ""},

            {   first: "Sara",
                last: "Gaylon",
                image: "assets/img/headshots/sara.jpg",
                description: "Sara Gaylon is a junior from Sacramento, CA pursuing a double major in Economics and History and a minor in Environmental Studies. This is her second year doing mock trial and second full year competing with UOMT, where she serves as the Social Events Chair. Sara enjoys spending time in the outdoors and hopes to pursue a future studying and practicing environmental law."},

            {   first: "Riley",
                last: "Olsen",
                image: "assets/img/headshots/blank.png",
                description: ""},

            {   first: "Nathan",
                last: "Potter",
                image: "assets/img/headshots/blank.png",
                description: ""},

            {   first: "John",
                last: "Dechert",
                image: "assets/img/headshots/blank.png",
                description: ""},

            {   first: "Michaela",
                last: "Kurinsky-Malos",
                image: "assets/img/headshots/michaela.jpg",
                description: "Michaela is a sophomore from Corvallis, OR, pursuing a double major in Political Science and History and a minor in Judaic Studies. This is Michaela's second year with UOMT, where she serves as the Vice President of Tournaments. During high school, Michaela served as the Captain of the Mock Trial and Speech and Debate programs. Michaela currently works with the Democratic Party of Oregon serving as an Executive Committee Member and Chairperson of the Rural Caucus. She has played an integral part of multiple local and state campaigns, working as a campaign intern and manager to Democrats across Oregon."},

            {   first: "Niharika",
                last: "Sachdeva",
                image: "assets/img/headshots/niharika.jpg",
                description: "Niharika is a sophomore from Eugene, OR pursuing a double major in Public Relations and Political Science, and a minor in Business while studying within the Clark Honors College. This is her second year doing mock trial and competing with UOMT, where she serves as the Vice President of Communications and the Social Media Chair. Along with mock trial, she is the Public Relations Officer for the Clark Honors College Student Association, and works as an assistant at the Law Office of Donald Johnson. Her hobbies include drinking bubble tea, yoga, and reading."},
            
             {  first: "Jacob",
                last:"Cho",
                image: "assets/img/headshots/blank.png",
                description: ""},
        ];
        $scope.cabinet = [
            { name: "Charles Steenkolk",
                image: "assets/img/headshots/charles.jpg",
                position: "VICE PRESIDENT",
                subtext: "OPERATIONS",
                email: "steenkol@uoregon.edu"
                },
            
            { name: "Greg Mina",
                image: "assets/img/headshots/greg.jpg",
                position: "PRESIDENT",
                subtext: "(719) 330-5004",
                email: "gmina@uoregon.edu"
                },
            
            { name: "Niharika Sachdeva",
                image: "assets/img/headshots/niharika.jpg",
                position: "VICE PRESIDENT",
                subtext: "COMMUNICATIONS",
                email: "niharika@uoregon.edu"
                },
            
            { name: "Thomas Dal Pino",
                image: "assets/img/headshots/thomas.jpg",
                position: "VICE PRESIDENT",
                subtext: "INSTRUCTION",
                email: "tdalpino@uoregon.edu"
                },
            
            { name: "Michaela Kurinsky-Malos",
                image: "assets/img/headshots/michaela.jpg",
                position: "VICE PRESIDENT",
                subtext: "TOURNAMENTS",
                email: "mkurinsk@uoregon.edu"
                }
        ];
        $scope.awards = {
                attorney:[
                    { name: "Greg Mina",
                        ranks: 20,
                        location: "Emerald City Open 2014",
                        },
                    { name: "Greg Mina",
                        ranks: 19,
                        location: "David Frohnmayer Invitational 2015",
                        },
                    { name: "Greg Mina",
                        ranks: 18,
                        location: "David Frohnmayer Invitational 2015",
                        },
                    { name: "Greg Mina",
                        ranks: 19,
                        location: "Winston Thomas Memorial Invitational 2015",
                        },
                    { name: "Greg Mina",
                        ranks: 18,
                        location: "Corvallis Regional 2014",
                        },
                    { name: "Riley Olson",
                        ranks: 18,
                        location: "Boise Regional 2015",
                        },
                    { name: "Riley Olson",
                        ranks: 18,
                        location: "David Frohnmayer Invitational 2015",
                        },
                    { name: "Jonathan Wu",
                        ranks: 17,
                        location: "Corvallis Regional 2014",
                        },
                    { name: "Jonathan Wu",
                        ranks: 16,
                        location: "Corvallis Regional 2013",
                        },
                    { name: "Niharika Sachdeva",
                        ranks: 18,
                        location: "Emerald City Open 2015",
                        },
                    { name: "Greg Mina",
                		ranks: 18,
                		location: "UCLAssic 2016"
                	},
                    { name: "Sara Gaylon",
                        ranks: 16,
                        location: "Stanford University Mock Trial Invitational 2016"
                    }
                ],
                witness:[
                    { name: "Phillip Kriegel",
                        ranks: 17,
                        location: "Stanford University Mock Trial Invitational 2016"
                    },
                    { name: "Keith Bunting",
                        ranks: 19,
                        location: "Emerald City Open 2015",
                        },
                    { name: "Keith Bunting",
                        ranks: 17,
                        location: "Emerald City Open 2015",
                        },
                    { name: "Phillip Kriegel",
                        ranks: 18,
                        location: "Emerald City Open 2015",
                        },
                    { name: "Phillip Kriegel",
                        ranks: 18,
                        location: "Emerald City Open 2014",
                        },
                    { name: "Phillip Kriegel",
                        ranks: 18,
                        location: "Newport Beach ORCS 2014",
                        },
                    { name: "Phillip Kriegel",
                        ranks: 17,
                        location: "Corvallis Regional 2014",
                        },
                    { name: "Phillip Kriegel",
                        ranks: 17,
                        location: "David Frohnmayer Invitational 2015",
                        },
                    { name: "Gwen Styarfyr",
                        ranks: 17,
                        location: "Corvallis Regional 2012",
                        },
                    { name: "Sadie Kavalier",
                        ranks: 17,
                        location: "David Frohnmayer Invitational 2015",
                        },
                    { name: "Caroline Doss",
                        ranks: 16,
                        location: "David Frohnmayer Invitational 2015",
                        },
                     { name: "Devon Staton-Ralston",
                        ranks: 16,
                        location: "Emerald City Open 2014",
                        },
                     { name: "Alex Kummer",
                        ranks: 16,
                        location: "Corvallis Regional 2014",
                        },
                     { name: "Megan Wever",
                        ranks: 16,
                        location: "Corvallis Regional 2013",
                        },
                     { name: "Phillip Kriegel",
                 		ranks: 17,
                 		location: "UCLAssic 2016"
                 	 	}
                ]   
        };
        $scope.scoreRank = function(score) {
            if(score <= 16){
                return 'fa fa-user fa-5x color-bronze';
            } else if (score <= 18){
                return 'fa fa-user fa-5x color-silver';
            } else {
                return 'fa fa-user fa-5x color-gold';
            }
        }
    }]);
}());