// @ts-nocheck
import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import type { ProfileService } from './profile.service';
import { JwtAuthGuard } from './jwt.guard';
import typia from 'typia';

export class ProfileDto {
  name: string;
  role: string;
  experience: number;
  technologies: string[];
}

typia.assert<ProfileDto>;

@Controller('profile')
@UseGuards(JwtAuthGuard)
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  async getProfile(): Promise<ProfileDto> {
    return this.profileService.getProfile();
  }

  @Post()
  async createProfile(@Body() profile: ProfileDto): Promise<string> {
    this.profileService.createProfile(profile);
    return 'Profile created successfully';
  }

  @Put(':id')
  async updateProfile(@Param('id') id: string, @Body() profile: ProfileDto): Promise<string> {
    this.profileService.updateProfile(id, profile);
    return 'Profile updated successfully';
  }

  @Delete(':id')
  async deleteProfile(@Param('id') id: string): Promise<string> {
    this.profileService.deleteProfile(id);
    return 'Profile deleted successfully';
  }
}
