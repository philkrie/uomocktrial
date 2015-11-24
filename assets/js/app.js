/*global angular */
(function () {
    'use strict';
    var app = angular.module('uomocktrial', []),
        roster = [
            { name: "Thomas Dal Pino",
                image: "assets/img/headshots/thomas.jpg",
                description: ""},
            
            { name: "Katherine Beare",
                image: "assets/img/headshots/blank.png",
                description: ""},
            
            { name: "Drew Betts",
                image: "assets/img/headshots/blank.png",
                description: ""},
            
            { name: "David Brunk",
                image: "assets/img/headshots/blank.png",
                description: "David is a junior from Hood River, OR, studying Economics and History. He studied in Cleveland, OH at Case Western Reserve University for the past two years, where he was a member of the varsity wrestling team. He has no experience with mock trial or speech and debate. In Eugene, he has joined the Mock Trial Team and began a historical research project. David hopes after college to pursue a graduate degree, attend law school, and get a dog."},
            
            { name: "Keith Bunting",
                image: "assets/img/headshots/blank.png",
                description: ""},
            
            { name: "Andrew Dizon",
                image: "assets/img/headshots/blank.png",
                description: ""},
            
            { name: "Ally Jansky",
                image: "assets/img/headshots/blank.png",
                description: "Ally is a freshman from Portland, OR, pursuing a major in Political Science while studying within the Clark Honors College. She competed in speech and debate program during her senior year in high school. She also competed in mock trial cases multiple times throughout high school. Ally has enjoyed an illustrious acting career, meaning she was in two student-written student- directed  plays during the course of her junior and senior year. In her free time, she likes to read the case over and over until her eyes disintegrate or she runs out of coffee."},
            
            { name: "Sadie Kavalier",
                image: "assets/img/headshots/blank.png",
                description: ""},
            
            { name: "Sabine Slome",
                image: "assets/img/headshots/blank.png",
                description: ""},
            
            { name: "Ian Alpenia",
                image: "assets/img/headshots/blank.png",
                description: ""},
            
            { name: "Clarice Beasley",
                image: "assets/img/headshots/blank.png",
                description: ""},
            
            { name: "Caroline Doss",
                image: "assets/img/headshots/blank.png",
                description: ""},
            
            { name: "Melissa Liu",
                image: "assets/img/headshots/blank.png",
                description: ""},
            
            { name: "Mia Bacher",
                image: "assets/img/headshots/blank.png",
                description: ""},
            
            { name: "William Leo",
                image: "assets/img/headshots/blank.png",
                description: "William is a freshman from Portland, OR studying International Relations and Philosophy. This is William's first year participating in mock trial, following with a deep interest about the law.  During high school, he participated in Speech and Debate, Constitution Team, and Student Government. William has a deep interest in governance as well as its implications for the lives of average citizens and has worked with Portland area lawyers as a legal researcher. In addition, last summer he worked as an administrative assistant for the 9th Circuit Court at Pioneer Courthouse in Portland."},
            
             { name: "Gunnar Olson",
                image: "assets/img/headshots/blank.png",
                description: ""},
            
             { name: "Morgan Terhune",
                image: "assets/img/headshots/blank.png",
                description: "Morgan Terhune is a freshman from Tualatin, OR, currently majoring in Philosophy in the Clarks Honors College. A newcomer to Mock Trial, this is her first year competing with the UOMT. In high school, Morgan was a member of her speech and debate team, participating in Lincoln-Douglas debate, and a member of Tualatin’s Youth Advisory Council.  Morgan has plenty of experience working with the government, having volunteered with local and state levels on many occasions. She looks forward to gaining experience with the UOMT this year."},
            
             { name: "Areeb Alam",
                image: "assets/img/headshots/areeb.jpg",
                description: ""},
            
             { name: "Olivia Courogen",
                image: "assets/img/headshots/blank.png",
                description: ""},
            
            { name: "MJ Flores",
                image: "assets/img/headshots/blank.png",
                description: ""},
            
            { name: "Aviva Kaye-Diamond",
                image: "assets/img/headshots/blank.png",
                description: ""},
            
            { name: "Sofia Penrose",
                image: "assets/img/headshots/blank.png",
                description: ""},
            
            { name: "Kerissa Sheley",
                image: "assets/img/headshots/blank.png",
                description: "Kerissa is a freshman from Eugene, OR, pursuing a double major in Business and Humanities while studying within the Clark Honors College. During high school she was on the Varsity Dance Team all four years, participated in the Mr. Irish Pageant to raise money for the Children’s Miracle Network, was the Publicity Representative for the National Honors Society, the Senior Class Vice President, and Secretary for Key Club, which is a community service organization affiliated with Kiwanis international. Kerissa is new to Mock Trial but is excited to learn something new."},
            
            { name: "Sonya Swanson",
                image: "assets/img/headshots/sonya.jpg",
                description: "Sonya is a freshman from Lake Oswego, OR, pursuing a major in Political Science and a minor in History while studying within the Clark Honors College. Although she has no prior mock trial/speech and debate experience, she has immersed myself in crime television and feel well equipped to tackle collegiate mock trial. Her biggest goal this year is to acquire a more holistic understanding of the courts and legal system. Sonya was drawn to mock trial because she loves looking at issues from all different perspectives to find creative solutions."},

            { name: "Phillip Kriegel",
                image: "assets/img/headshots/phillip.jpg",
                description: ""},

            { name: "Greg Mina",
                image: "assets/img/headshots/greg.jpg",
                description: "Greg is a senior from Colorado Springs, CO, pursuing a double major in Political Science and Spanish while studying within the Clark Honors College. Greg is entering his fourth year with UOMT, and third as President. In high school, Greg earned two outstanding attorney awards while leading his team to two state championship rounds, and garnered the most individual ranks in the state in 2011. Competing for UOMT, Greg served as captain of the first ORCS team in school history, and was the first UOMT competitor to earn all 20 possible individual ranks at a tournament."},

            { name: "Devon Staton-Ralston",
                image: "assets/img/headshots/devon.jpg",
                description: ""},

            { name: "Charles Steenkolk",
                image: "assets/img/headshots/blank.png",
                description: ""},

            { name: "Sara Gaylon",
                image: "assets/img/headshots/sara.jpg",
                description: ""},

            { name: "Riley Olson",
                image: "assets/img/headshots/blank.png",
                description: ""},

            { name: "Nathan Potter",
                image: "assets/img/headshots/blank.png",
                description: ""},

            { name: "John Dechert",
                image: "assets/img/headshots/blank.png",
                description: ""},

            { name: "Michaela Kurinsky-Malos",
                image: "assets/img/headshots/blank.png",
                description: "Michaela is a sophomore from Corvallis, OR, pursuing a double major in Political Science and History and a minor in Judaic Studies. This is Michaela's second year with UOMT, where she serves as the Vice President of Tournaments. During high school, Michaela served as the Captain of the Mock Trial and Speech and Debate programs. Michaela currently works with the Democratic Party of Oregon serving as an Executive Committee Member and Chairperson of the Rural Caucus. She has played an integral part of multiple local and state campaigns, working as a campaign intern and manager to Democrats across Oregon."},

            { name: "Niharika Sachdeva",
                image: "assets/img/headshots/niharika.jpg",
                description: "Niharika is a sophomore from Eugene, OR pursuing a double major in Public Relations and Political Science, and a minor in Business while studying within the Clark Honors College. This is her second year doing mock trial and competing with UOMT, where she serves as the Vice President of Communications and the Social Media Chair. Along with mock trial, she is the Public Relations Officer for the Clark Honors College Student Association, and works as an assistant at the Law Office of Donald Johnson. Her hobbies include drinking bubble tea, yoga, and reading."},
            
             { name: "Jacob Cho",
                image: "assets/img/headshots/blank.png",
                description: ""},
        ],
        cabinet = [
            { name: "Charles Steenkolk",
                image: "assets/img/headshots/blank.png",
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
                image: "assets/img/headshots/blank.png",
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
                image: "assets/img/headshots/blank.png",
                position: "VICE PRESIDENT",
                subtext: "TOURNAMENTS",
                email: "mkurinsk@uoregon.edu"
                }
        ],
        awards = [
            { name: "",
                ranks: "",
                location: ""
                }
        ];
    
    app.controller('MockController', ['$scope', '$filter', function($scope, $filter) {
        $scope.roster = roster;
        $scope.roster = $filter("orderBy")($scope.roster, 'name', false);
        this.cabinet = cabinet;
    }]);
}());