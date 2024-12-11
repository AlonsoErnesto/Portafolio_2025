SELECT
    p.name AS profile_name,
    p.experience_years AS profile_experience_years,
    p.skills AS profile_skills,
    pr.name AS project_name,
    pr.description AS project_description,
    pr.status AS project_status,
    pr.created_at AS project_creation_date,
    pr.updated_at AS project_updated_date,
    CASE
        WHEN pr.updated_at IS NOT NULL THEN
            DATEDIFF(pr.updated_at, pr.created_at)
        ELSE
            0
    END AS project_duration_in_days,
    RANK() OVER (PARTITION BY p.id ORDER BY pr.updated_at DESC) AS project_update_rank
FROM profile p
JOIN projects pr ON p.id = pr.profile_id
LEFT JOIN (
    SELECT project_id, COUNT(*) AS task_count
    FROM tasks
    GROUP BY project_id
) t ON pr.id = t.project_id
WHERE pr.status IN ('IN_PROGRESS', 'COMPLETED')
ORDER BY pr.status DESC, pr.updated_at DESC;
