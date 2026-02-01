# TODO: Connect Frontend to Backend and Push to GitHub

## Phase 1: Backend Connection Configuration

### Step 1: Create Environment Variables
- [x] Create `.env` file with `VITE_API_URL=https://scamshield-backend-urbi.onrender.com`
- [x] Verify environment variable is properly set

### Step 2: Update Vite Configuration
- [ ] Update `vite.config.js` to use production API URL
- [ ] Remove or keep local proxy for development

### Step 3: Verify API Endpoints
- [ ] Check that all service files use correct endpoints
- [ ] Verify authentication endpoints: `/auth/register`, `/auth/login`
- [ ] Verify blog endpoints: `/blogs`, `/blogs/my/list`
- [ ] Verify scam endpoints: `/scams/report`, `/scams/latest`, `/scams/search`
- [ ] Verify user endpoints: `/users/me`, `/users/leaderboard`
- [ ] Verify admin endpoints: `/admin/pending`, `/admin/verify/:id`
- [ ] Verify phishing endpoints: `/phishing/questions/:level`, `/phishing/submit`

## Phase 2: Build and Test

### Step 4: Build Frontend
- [ ] Run `npm install`
- [ ] Run `npm run build`
- [ ] Verify build completes successfully

### Step 5: Test API Connection
- [ ] Test API endpoints with the new backend URL
- [ ] Verify authentication flow
- [ ] Verify data fetching works correctly

## Phase 3: GitHub Repository Update

### Step 6: Git Configuration
- [ ] Initialize git repository (if not already done)
- [ ] Configure git user identity
- [ ] Set up remote origin

### Step 7: Commit and Push
- [ ] Add all files to staging
- [ ] Create commit with descriptive message
- [ ] Push to GitHub repository

## Phase 4: Deployment Verification

### Step 8: Render Deployment
- [ ] Verify environment variables in Render dashboard
- [ ] Trigger new build if needed
- [ ] Test deployment URL

## Notes
- Backend URL: https://scamshield-backend-urbi.onrender.com
- GitHub Repository: https://github.com/HARISH-YADAV483/scamshiild
- All endpoints are relative to the baseURL set in `src/services/api.js`

