import { useParams } from "react-router-dom";
import { Typography, Box, Card, CardMedia, CardContent } from "@mui/material";

import { projectData } from "../data/projectData";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectData.find(
    (proj) => proj.id === parseInt(projectId, 10)
  );

  if (!project) {
    return <Typography variant="h6">Project not found</Typography>;
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Card sx={{ maxWidth: 800, margin: "auto" }}>
        <CardMedia
          component="img"
          height="400"
          image={project.image}
          alt={project.title}
        />
        <CardContent>
          <Typography variant="h4">{project.title}</Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {project.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProjectDetail;
