import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Briefcase, Heart, Star, Users, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const fetchDashboardData = async () => {
  const params = new URLSearchParams(window.location.search);
  const memberData = {
    name: params.get('name') || 'John Doe',
    image_url: params.get('image_url') || 'https://i.pravatar.cc/150',
    key_skills: params.get('key_skills')?.split(',') || ['React', 'Node.js', 'Python'],
    industry: params.get('industry') || 'Technology',
    business_goals: params.get('business_goals')?.split(',') || ['Expand client base', 'Increase revenue'],
    interests: params.get('interests')?.split(',') || ['AI', 'Blockchain', 'IoT'],
    location: params.get('location') || 'New York, USA',
    hobbies: params.get('hobbies')?.split(',') || ['Reading', 'Hiking', 'Photography'],
    career_stage: params.get('career_stage') || 'Mid-level',
    preferred_communication: params.get('preferred_communication') || 'Email'
  };

  const matchesData = [
    {
      name: params.get('match1_name') || 'Alice Smith',
      image_url: params.get('match1_image_url') || 'https://i.pravatar.cc/150?u=alicesmith',
      matching_score: parseInt(params.get('match1_score')) || 85,
      explanation: params.get('match1_explanation') || 'Strong skill complementarity and shared interests',
      complementary_skills: params.get('match1_complementary_skills')?.split(',') || ['UI/UX Design', 'Project Management'],
      potential_collaboration: params.get('match1_collaboration') || 'Tech startup focused on AI-driven solutions',
      shared_interests: params.get('match1_shared_interests')?.split(',') || ['AI', 'IoT'],
      location: params.get('match1_location') || 'Boston, USA',
      geographical_synergy: params.get('match1_synergy') || 'East Coast tech hub proximity',
      experience_level: params.get('match1_experience') || 'Senior',
      communication_compatibility: params.get('match1_compatibility') || 'High'
    },
    {
      name: params.get('match2_name') || 'Bob Johnson',
      image_url: params.get('match2_image_url') || 'https://i.pravatar.cc/150?u=bobjohnson',
      matching_score: parseInt(params.get('match2_score')) || 75,
      explanation: params.get('match2_explanation') || 'Complementary industry experience and business goals',
      complementary_skills: params.get('match2_complementary_skills')?.split(',') || ['Marketing', 'Sales'],
      potential_collaboration: params.get('match2_collaboration') || 'B2B SaaS product development',
      shared_interests: params.get('match2_shared_interests')?.split(',') || ['Blockchain'],
      location: params.get('match2_location') || 'San Francisco, USA',
      geographical_synergy: params.get('match2_synergy') || 'Tech industry network',
      experience_level: params.get('match2_experience') || 'Executive',
      communication_compatibility: params.get('match2_compatibility') || 'Medium'
    },
    {
      name: params.get('match3_name') || 'Emma Davis',
      image_url: params.get('match3_image_url') || 'https://i.pravatar.cc/150?u=emmadavis',
      matching_score: parseInt(params.get('match3_score')) || 70,
      explanation: params.get('match3_explanation') || 'Shared interests and potential for mentorship',
      complementary_skills: params.get('match3_complementary_skills')?.split(',') || ['Data Science', 'Machine Learning'],
      potential_collaboration: params.get('match3_collaboration') || 'AI research project',
      shared_interests: params.get('match3_shared_interests')?.split(',') || ['AI', 'IoT'],
      location: params.get('match3_location') || 'Seattle, USA',
      geographical_synergy: params.get('match3_synergy') || 'Tech hub collaboration',
      experience_level: params.get('match3_experience') || 'Senior',
      communication_compatibility: params.get('match3_compatibility') || 'High'
    }
  ];

  return {
    member: memberData,
    matches: matchesData
  };
};

const MemberCard = ({ member }) => (
  <Card className="mb-6 bg-gradient-to-br from-purple-500 to-blue-600 text-white">
    <CardHeader className="flex flex-row items-center gap-4">
      <Avatar className="h-20 w-20 border-2 border-white">
        <AvatarImage src={member.image_url} alt={member.name} />
        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div>
        <CardTitle className="text-2xl">{member.name}</CardTitle>
        <p className="text-sm text-purple-200">{member.industry} | {member.career_stage}</p>
      </div>
    </CardHeader>
    <CardContent>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 gap-4"
      >
        <div>
          <h3 className="font-semibold mb-2 text-purple-200">Key Skills</h3>
          <div className="flex flex-wrap gap-2">
            {member.key_skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Badge variant="secondary" className="bg-white text-purple-700">{skill}</Badge>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-purple-200">Business Goals</h3>
          <ul className="list-disc list-inside">
            {member.business_goals.map((goal, index) => (
              <motion.li
                key={goal}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-sm"
              >
                {goal}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-4"
      >
        <h3 className="font-semibold mb-2 text-purple-200">Interests</h3>
        <div className="flex flex-wrap gap-2">
          {member.interests.map((interest, index) => (
            <motion.div
              key={interest}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Badge variant="outline" className="border-white text-white">{interest}</Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-4 flex items-center gap-2"
      >
        <MapPin className="h-5 w-5" />
        <span className="text-sm">{member.location}</span>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-2 flex items-center gap-2"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-sm">Prefers {member.preferred_communication}</span>
      </motion.div>
    </CardContent>
  </Card>
);

const MatchCard = ({ match }) => (
  <Card className="mb-4 overflow-hidden">
    <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-purple-500 to-blue-600 text-white">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16 border-2 border-white">
          <AvatarImage src={match.image_url} alt={match.name} />
          <AvatarFallback>{match.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-xl">{match.name}</CardTitle>
          <p className="text-sm text-purple-200">{match.experience_level}</p>
        </div>
      </div>
      <div className="text-right">
        <div className="text-3xl font-bold">{match.matching_score}/10</div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Progress value={match.matching_score * 10} max={100} className="w-32 h-2" />
        </motion.div>
      </div>
    </CardHeader>
    <CardContent className="pt-4">
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-sm mb-4 italic text-gray-600"
      >
        {match.explanation}
      </motion.p>
      <div className="grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="font-semibold mb-2 flex items-center gap-2 text-purple-700">
            <Star className="h-5 w-5" /> Complementary Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {match.complementary_skills.map(skill => (
              <Badge key={skill} variant="secondary" className="bg-purple-100 text-purple-700">{skill}</Badge>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="font-semibold mb-2 flex items-center gap-2 text-blue-700">
            <Heart className="h-5 w-5" /> Shared Interests
          </h4>
          <div className="flex flex-wrap gap-2">
            {match.shared_interests.map(interest => (
              <Badge key={interest} variant="outline" className="border-blue-300 text-blue-700">{interest}</Badge>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-4"
      >
        <h4 className="font-semibold mb-2 flex items-center gap-2 text-gray-700">
          <Briefcase className="h-5 w-5" /> Potential Collaboration
        </h4>
        <p className="text-sm text-gray-600">{match.potential_collaboration}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600"
      >
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-purple-500" />
          <span>{match.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-blue-500" />
          <span>{match.geographical_synergy}</span>
        </div>
      </motion.div>
    </CardContent>
  </Card>
);

const Index = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['dashboardData'],
    queryFn: fetchDashboardData
  });

  if (isLoading) return <div className="text-center mt-8 text-2xl text-purple-600">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-2xl text-red-500">Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"
      >
        Talent Pool Matchmaker Dashboard
      </motion.h1>
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-1"
        >
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">Your Profile</h2>
          <MemberCard member={data.member} />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-2"
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Top Matches</h2>
          {data.matches.map((match, index) => (
            <motion.div
              key={`${match.name}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <MatchCard match={match} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
