import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Briefcase, Heart, Star, Users, MessageCircle } from "lucide-react";

const fetchDashboardData = async () => {
  // In a real application, you'd fetch this data from an API
  // For this example, we'll use mock data
  return {
    member: {
      name: "John Doe",
      image_url: "https://i.pravatar.cc/150?u=johndoe",
      key_skills: ["React", "Node.js", "Python"],
      industry: "Technology",
      business_goals: ["Expand client base", "Increase revenue"],
      interests: ["AI", "Blockchain", "IoT"],
      location: "New York, USA",
      hobbies: ["Reading", "Hiking", "Photography"],
      career_stage: "Mid-level",
      preferred_communication: "Email"
    },
    matches: [
      {
        name: "Alice Smith",
        image_url: "https://i.pravatar.cc/150?u=alicesmith",
        matching_score: 85,
        explanation: "Strong skill complementarity and shared interests",
        complementary_skills: ["UI/UX Design", "Project Management"],
        potential_collaboration: "Tech startup focused on AI-driven solutions",
        shared_interests: ["AI", "IoT"],
        location: "Boston, USA",
        geographical_synergy: "East Coast tech hub proximity",
        experience_level: "Senior",
        communication_compatibility: "High"
      },
      {
        name: "Bob Johnson",
        image_url: "https://i.pravatar.cc/150?u=bobjohnson",
        matching_score: 75,
        explanation: "Complementary industry experience and business goals",
        complementary_skills: ["Marketing", "Sales"],
        potential_collaboration: "B2B SaaS product development",
        shared_interests: ["Blockchain"],
        location: "San Francisco, USA",
        geographical_synergy: "Tech industry network",
        experience_level: "Executive",
        communication_compatibility: "Medium"
      },
      {
        name: "Emma Davis",
        image_url: "https://i.pravatar.cc/150?u=emmadavis",
        matching_score: 70,
        explanation: "Shared interests and potential for mentorship",
        complementary_skills: ["Data Science", "Machine Learning"],
        potential_collaboration: "AI research project",
        shared_interests: ["AI", "IoT"],
        location: "Seattle, USA",
        geographical_synergy: "Tech hub collaboration",
        experience_level: "Senior",
        communication_compatibility: "High"
      }
    ]
  };
};

const MemberCard = ({ member }) => (
  <Card className="mb-6">
    <CardHeader className="flex flex-row items-center gap-4">
      <Avatar className="h-16 w-16">
        <AvatarImage src={member.image_url} alt={member.name} />
        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div>
        <CardTitle>{member.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{member.industry} | {member.career_stage}</p>
      </div>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold mb-2">Key Skills</h3>
          <div className="flex flex-wrap gap-2">
            {member.key_skills.map(skill => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Business Goals</h3>
          <ul className="list-disc list-inside">
            {member.business_goals.map(goal => (
              <li key={goal} className="text-sm">{goal}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Interests</h3>
        <div className="flex flex-wrap gap-2">
          {member.interests.map(interest => (
            <Badge key={interest} variant="outline">{interest}</Badge>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <MapPin className="h-4 w-4" />
        <span className="text-sm">{member.location}</span>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <MessageCircle className="h-4 w-4" />
        <span className="text-sm">Prefers {member.preferred_communication}</span>
      </div>
    </CardContent>
  </Card>
);

const MatchCard = ({ match }) => (
  <Card className="mb-4">
    <CardHeader className="flex flex-row items-center justify-between">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={match.image_url} alt={match.name} />
          <AvatarFallback>{match.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg">{match.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{match.experience_level}</p>
        </div>
      </div>
      <div className="text-right">
        <div className="text-2xl font-bold">{match.matching_score}%</div>
        <Progress value={match.matching_score} className="w-24" />
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-sm mb-4">{match.explanation}</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Star className="h-4 w-4" /> Complementary Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {match.complementary_skills.map(skill => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Heart className="h-4 w-4" /> Shared Interests
          </h4>
          <div className="flex flex-wrap gap-2">
            {match.shared_interests.map(interest => (
              <Badge key={interest} variant="outline">{interest}</Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="font-semibold mb-2 flex items-center gap-2">
          <Briefcase className="h-4 w-4" /> Potential Collaboration
        </h4>
        <p className="text-sm">{match.potential_collaboration}</p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>{match.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          <span>{match.geographical_synergy}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Index = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['dashboardData'],
    queryFn: fetchDashboardData
  });

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Talent Pool Matchmaker Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
          <MemberCard member={data.member} />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Top Matches</h2>
          {data.matches.map(match => (
            <MatchCard key={match.name} match={match} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
